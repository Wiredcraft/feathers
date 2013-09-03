module.exports = function(grunt) {
    return {
        css: {
            options: {
                config: 'compass.config.rb',
                cssDir: '<%= build_dir %>/assets/'
            }
        }
    }
}
