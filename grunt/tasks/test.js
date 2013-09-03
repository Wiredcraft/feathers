module.exports = function(grunt) {
    grunt.registerTask('test', [
        'build',
        'karma:unit',
        'karmaconfig',
        'karma:continuous',
        'watch'
    ]);
}
