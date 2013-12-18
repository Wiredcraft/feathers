var globule = require('globule');
var path = require('path');

module.exports = function(grunt) {
    var files,
        count,
        config;

    config = {};
    config.pkg = grunt.file.readJSON('package.json');
    config.meta = {
        banner: '/**\n' +
            ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' *\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed <%= pkg.licenses.type %>\n' +
            ' */\n'
    };

    files = globule.find('./grunt/*.js', {
        filter: function(file) {
            var basename = path.basename(file, '.js');
            return basename !== 'index';
        }
    });

    files.forEach(function(file) {
        var basename = path.basename(file, '.js'),
            pathname = path.resolve('.', file);

        config[basename] = require('./' + basename)(grunt);
    })

    return config;
};