module.exports = function(grunt) {
    return {
        compile: {
            options: {
                banner: '<%= meta.banner %>',
                mangle: false
            },
            files: {
                '<%= concat.compile_js.dest %>': '<%= concat.compile_js.dest %>'
            }
        }
    }
}
