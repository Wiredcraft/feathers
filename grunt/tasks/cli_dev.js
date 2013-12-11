module.exports = function(grunt) {
    grunt.registerTask('dev', [
        'ngconstant:development',

        'clean',
        'html2js',
        'jshint',
        'compass',
        'copy:build_assets',
        'copy:build_vendor',
        'copy:build_appjs',

        'headers:build'
    ]);
}
