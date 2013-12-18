module.exports = function(grunt) {
    return {
        server: {
            options: {
                port: '<%= dev_port %>',
                base: 'build'
            }
        }
    }
}
