module.exports = function(grunt) {
    grunt.registerTask('live', [
        'connect',
        'shell',
        'watch'
    ]);
}
