module.exports = function(grunt) {
    return {
        build: {
            options: {
                config: 'compass.config.rb',
                cssDir: '<%= build_dir %>/assets/'
            }
        },
        compile: {
            options: {
                config: 'compass.config.rb',
                cssDir: '<%= build_dir %>/assets/'
            }
        }
    }
}
