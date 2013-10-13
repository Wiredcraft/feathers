module.exports = function(grunt) {
    grunt.registerTask('dev', [
        'ngconstant:development',
        'build',
        'copy:build_appjs',
        'headers:build',
        'connect',
        'shell',
        'watch'
    ]);
}
