module.exports = function(grunt) {
    grunt.registerTask('build', [
        'clean:build',
        'html2js',
        'compass',
        'copy:build_assets',
        'copy:build_vendor'
    ])
}
