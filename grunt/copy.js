module.exports = function(grunt) {
    return {
        build_app_assets: {
            files: [
                {
                    src: [ '**' ],
                    dest: '<%= build_dir %>/assets/',
                    cwd: 'src/assets',
                    expand: true
                }
            ]
        },
        build_vendor_assets: {
            files: [
                {
                    src: [ '<%= vendor_files.assets %>' ],
                    dest: '<%= build_dir %>/assets/',
                    cwd: '.',
                    expand: true,
                    flatten: true
                }
            ]
        },
        build_appjs: {
            files: [
                {
                    src: [ '<%= app_files.js %>' ],
                    dest: '<%= build_dir %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        build_vendorjs: {
            files: [
                {
                    src: [ '<%= vendor_files.js %>' ],
                    dest: '<%= build_dir %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        compile_assets: {
            files: [{
                src: ['**'],
                dest: '<%= compile_dir %>/assets',
                cwd: '<%= build_dir %>/assets',
                expand: true
            }]
        },
        nodewebkit_package: {
            files: [{
                src: ['package.json'],
                dest: '<%= compile_dir %>',
                cwd: './src',
                expand: true
            }]
        },
        nodewebkit_local: {
            files: [{
                src: ['package.json'],
                dest: '<%= build_dir %>',
                cwd: './src',
                expand: true
            }]
        }
    }
}
