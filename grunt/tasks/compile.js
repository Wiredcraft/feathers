module.exports = function(grunt) {
    grunt.registerTask('compile', [
        'copy:compile_assets',
        'copy:compile_vendor',
        'ngmin',
        'concat',
        // 'uglify',
        'headers:compile'
    ])
}
