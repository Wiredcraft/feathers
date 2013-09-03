module.exports = function(grunt) {
    return {
        openBrowser: {
            command: 'open http://localhost:' + '<%= dev_port %>'
        }
    }
}
