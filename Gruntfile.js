module.exports = function(grunt) {
    var config = require('./build.config.js');

    // Tasks configuration
    grunt.initConfig(grunt.util._.extend(require('./grunt/config')(grunt), config));

    // Load the npm tasks
    grunt.file.expand('node_modules/grunt-*/tasks').forEach(grunt.loadTasks);

    // Load our custom tasks
    grunt.loadTasks('./grunt/tasks');
}
