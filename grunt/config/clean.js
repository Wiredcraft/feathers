module.exports = function(grunt) {
    return {
        build: [
            '<%= build_dir %>'
        ],
        bin: [
            '<%= compile_dir %>'
        ]
    }
}
