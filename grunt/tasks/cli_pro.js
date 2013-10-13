module.exports = function(grunt) {
    grunt.registerTask('default', [
        'ngconstant:production',
        'build',
        'copy:build_appjs_product',
        'headers:build',
        'compile'
    ]);
}
