module.exports = function(grunt) {
    grunt.registerTask('dev', [
        'build',
        'copy:build_appjs',
        'headers:build',
        'connect',
        'shell',
        'watch'
    ]);
}
