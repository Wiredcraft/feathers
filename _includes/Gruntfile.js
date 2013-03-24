module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    yuicompress: true
                },
                files: {
                    '../assets.css' : ['less/**/*.less']
                }
            }
        },
        watch: {
            templates: {
                files: ['templates/**/*.html'],
                tasks: ['jst']
            },
            less: {
                files: ['less/**/*.less'],
                tasks: ['less']
            }
        },
        jst: {
            options: {
                prettify: true,
                processName: function(filename) {
                    var str = filename.split('.html')[0];
                    return str.match(/[^/]+$/g)
                }
            },
            static_mappings: {
                files: [{
                    src: ['templates/**/*.html'], 
                    dest: 'templates/templates.js',
                    filter: 'isFile'
                }]
            }
        }
    });

    // Watch files
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Make templates
    grunt.loadNpmTasks('grunt-contrib-jst');
    
    // Compile less
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task.
    grunt.registerTask('default', ['watch']);
};
