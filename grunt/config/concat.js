module.exports = function(grunt) {
    return {
        compile_js: {
            options: {
                banner: '<%= meta.banner %>',
                separator: ';'
            },
            src: [
                '<%= vendor_files.js %>',
                '<%= build_dir %>/src/**/*.js',
                '<%= html2js.app.dest %>',
                '<%= html2js.common.dest %>'
            ],
            dest: '<%= compile_dir %>/assets/<%= pkg.name %>.js'
        }
    }
}
