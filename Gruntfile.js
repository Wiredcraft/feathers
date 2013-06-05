var matchdep = require('matchdep');

module.exports = function (grunt) {
    // load all grunt tasks
    matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                relativeAssets: false
            },
            dist: {},
            server: {
                options: {
                    // debugInfo: true
                }
            }
        }
    });

    grunt.registerTask('default', []);
};
