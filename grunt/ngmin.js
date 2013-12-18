module.exports = function(grunt) {
    return {
        minify: {
            expand: true,
            src: '<%= app_files.js %>',
            cwd: '<%= build_dir %>',
            dest: '<%= build_dir %>'
        }
    }
}
