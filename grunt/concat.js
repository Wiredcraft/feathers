module.exports = function(grunt) {
    return {
        build_css: {
            options: {
                banner: '<%= meta.banner %>',
                separator: ';'
            },
            src: [
                '<%= vendor_files.css %>',
                '<%= compass.build.options.cssDir %>/**/*.css'
            ],
            dest: '<%= compass.build.options.cssDir %>/style.css'
        },
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
