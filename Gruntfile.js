module.exports = function(grunt) {
    /**
     * Load required Grunt tasks. These are installed based on the versions listed
     * in `package.json` when you do `npm install` in this directory.
     */
    require('load-grunt-tasks')(grunt);

    /**
     * Load in our build configuration file.
     */
    var config = require('./build.config.js');

    /**
     * Tasks configuration
     */
    grunt.initConfig(grunt.util._.extend(require('./grunt')(grunt), config));

    /**
     * common build task
     */
    grunt.registerTask('build', [
        'clean', 'html2js', 'jshint', 'compass:build', 'copy:build_app_assets',
        'copy:build_vendor_assets', 'copy:build_appjs', 'copy:build_vendorjs',
        'headers:build'
    ]);

    /**
     * development task
     */
    grunt.registerTask('dev', [
        'ngconstant:development', 'build'
    ]);

    /**
     * livereload for development
     */
    grunt.registerTask('live', [
        'connect', 'watch'
    ]);

    /**
     * the default task for production
     */
    grunt.registerTask('default', [
        'ngconstant:production',

        'build',

        'compass:compile', 'copy:compile_assets', 'ngmin', 'concat:compile_js',
        'uglify', 'headers:compile'
    ]);

    /**
     * task for staging
     */
    grunt.registerTask('staging', [
        'ngconstant:staging', 'build'
    ]);

    /**
     * make distribution for production
     */
    grunt.registerTask('distribution', [
        'copy:nodewebkit_package', 'nodewebkit:production', 'compress'
    ]);

    /**
     * make a local webkit build
     */
    grunt.registerTask('local_build', [
        'copy:nodewebkit_local', 'nodewebkit:dev'
    ]);

    /**
     * task for test
     */
    grunt.registerTask('test', [
        'karmaconfig', 'karma:unit', 'karma:continuous'
    ]);

    function filterForJS(files) {
        return files.filter(function(file) {
            return file.match(/\.js$/);
        });
    }

    function filterForCSS(files) {
        return files.filter(function(file) {
            return file.match(/\.css$/);
        });
    }

    /**
     * The index.html template includes the stylesheet and javascript sources
     * based on dynamic names calculated in this Gruntfile. This task assembles
     * the list into variables for the template to use and then runs the
     * compilation.
     */
    grunt.registerMultiTask('headers', 'Process index.html template', function() {
        var dirRE = new RegExp('^(' + grunt.config('build_dir') + '|' + grunt.config('compile_dir') + ')\/', 'g');
        var jsFiles = filterForJS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });
        var cssFiles = filterForCSS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });
        grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
            process: function(contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles,
                        styles: cssFiles,
                        version: grunt.config('pkg.version')
                    }
                });
            }
        });
    });

    grunt.registerMultiTask('karmaconfig', 'Process karma config templates', function() {
        var jsFiles = filterForJS(this.filesSrc);

        grunt.file.copy('karma/karma-unit.tpl.js', grunt.config('build_dir') + '/karma-unit.js', {
            process: function(contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles
                    }
                });
            }
        });
    });
}
