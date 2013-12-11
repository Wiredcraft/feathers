module.exports = function(grunt) {
    grunt.registerTask('default', [
        'ngconstant:production',

        'clean',
        'html2js',
        'compass',
        'copy:build_assets',
        'copy:build_vendor',
        'copy:build_appjs_product',
        'headers:build',

        'copy:compile_assets',
        'copy:compile_vendor',
        'ngmin',
        'concat',
        'uglify',
        'headers:compile'
    ]);
}
