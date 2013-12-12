module.exports = function(grunt) {
    grunt.registerTask('live', [
        'connect',
        // optional: useful when you want us to help you open a browser!
        //'shell',
        'watch'
    ]);
}
