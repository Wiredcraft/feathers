module.exports = function(grunt) {
    return {
        build_assets: {
            files: [{
                src: ['**'],
                dest: '<%= build_dir %>/assets/',
                cwd: 'src/assets',
                expand: true
            }]
        },
        build_vendor: {
            files: [{
                src: [
                    '<%= vendor_files.js %>',
                    '<%= vendor_files.css %>',
                    '<%= vendor_files.img %>'
                ],
                dest: '<%= build_dir %>/',
                cwd: '.',
                expand: true
            }]
        },
        build_appjs: {
            files: [{
                src: ['<%= app_files.js %>'],
                dest: '<%= build_dir %>/',
                cwd: '.',
                expand: true
            }],
            options: {
                processContent: function(src) {
                    return src.replace(/API_URL/g, grunt.config('api.dev.apiUrl')).replace(/CLIENT_ID/g, grunt.config('api.dev.clientId'));
                }
            }
        },
        build_appjs_product: {
            files: [{
                src: ['<%= app_files.js %>'],
                dest: '<%= build_dir %>/',
                cwd: '.',
                expand: true
            }],
            options: {
                processContent: function(src) {
                    return src.replace(/API_URL/g, grunt.config('api.product.apiUrl')).replace(/CLIENT_ID/g, grunt.config('api.product.clientId'));
                }
            }
        },
        compile_assets: {
            files: [{
                src: ['**'],
                dest: '<%= compile_dir %>/assets',
                cwd: '<%= build_dir %>/assets',
                expand: true
            }]
        },
        compile_vendor: {
            files: [{
                src: ['**/*.css', '**/*.png', '**/*.gif'],
                dest: '<%= compile_dir %>/assets',
                cwd: '<%= build_dir %>/vendor',
                expand: true
            }]
        }
    }
}
