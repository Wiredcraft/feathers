module.exports = function(grunt) {
    return {
        app: {
            options: {
                base: 'src/app'
            },
            src: ['<%= app_files.atpl %>'],
            dest: '<%= build_dir %>/templates-app.js'
        },
        common: {
            options: {
                base: 'src/common'
            },
            src: ['<%= app_files.ctpl %>'],
            dest: '<%= build_dir %>/templates-common.js'
        }
    }
}
