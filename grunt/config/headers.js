module.exports = function(grunt) {
    return {
        build: {
            dir: '<%= build_dir %>',
            src: [
                '<%= vendor_files.js %>',
                '<%= build_dir %>/src/**/*.js',
                '<%= html2js.common.dest %>',
                '<%= html2js.app.dest %>',
                '<%= vendor_files.css %>',
                '<%= vendor_files.img %>',
                '<%= compass.css.options.cssDir %>/**/*.css'
            ]
        },
        compile: {
            dir: '<%= compile_dir %>',
            src: [
                '<%= concat.compile_js.dest %>',
                '<%= compile_dir %>/assets/**/*.css'
            ]
        }
    }
}
