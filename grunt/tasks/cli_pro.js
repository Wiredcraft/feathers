module.exports = function(grunt) {
    grunt.registerTask('default', [
        'build',
        'copy:build_appjs_product',
        'headers:build',
        'compile'
    ]);
}
