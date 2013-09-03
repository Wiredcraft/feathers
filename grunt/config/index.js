module.exports = function(grunt) {
    return {
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner:
                '/**\n' +
                ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' *\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed <%= pkg.licenses.type %>\n' +
                ' */\n'
        },
        clean: require('./clean')(grunt),
        compass: require('./compass')(grunt),
        concat: require('./concat')(grunt),
        connect: require('./connect')(grunt),
        copy: require('./copy')(grunt),
        headers: require('./headers')(grunt),
        html2js: require('./html2js')(grunt),
        karma: require('./karma')(grunt),
        karmaconfig: require('./karmaconfig')(grunt),
        ngmin: require('./ngmin')(grunt),
        shell: require('./shell')(grunt),
        uglify: require('./uglify')(grunt),
        watch: require('./watch')(grunt)
    };
};
