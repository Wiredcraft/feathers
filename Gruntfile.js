module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 4000,
                    keepalive: true,
                    base: '.'
                }
            }
        }
    });

    // Front-end server
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task.
    grunt.registerTask('default', ['connect']);
};