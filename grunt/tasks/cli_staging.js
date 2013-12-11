module.exports = function(grunt) {
    grunt.registerTask('staging', [
        'ngconstant:staging',

        'clean',
        'html2js',
        'compass',
        'copy:build_assets',
        'copy:build_vendor',
        'copy:build_appjs',

        'headers:build'
    ]);
}
