module.exports = function(grunt) {
    return {
        options: {
            livereload: true
        },
        gruntfiles: {
            files: 'Gruntfil.js',
            tasks: [ 'jshint:gruntfile' ],
            options: {
                livereload: false
            }
        },
        jssrc: {
            files: [
                '<%= app_files.js %>'
            ],
            tasks: [ 'jshint:src', 'karma:unit:run', 'copy:build_appjs']
        },
        assets: {
            files: [
                'src/assets/**/*'
            ],
            tasks: ['copy:build_assets']
        },
        html: {
            files: ['<%= app_files.html %>'],
            tasks: ['headers:build']
        },
        compass: {
            files: ['src/**/*.scss'],
            tasks: ['compass']
        },
        tpls: {
            files: [
                '<%= app_files.atpl %>',
                '<%= app_files.ctpl %>'
            ],
            tasks: ['html2js']
        },
        jsunit: {
            files: [
                '<%= app_files.jsunit %>'
            ],
            tasks: [ 'jshint:test', 'karma:unit:run'],
            options: {
                livereload: false
            }
        }
    }
}
