module.exports = function(grunt) {
    return {
        options: {
            space: ' '
        },

        development: [{
            dest: 'src/app/config.js',
            wrap: '"use strict";\n\n <%= __ngModule %>',
            name: 'config',
            constants: '<%= fixtures.development %>'
        }],

        staging: [{
            dest: 'src/app/config.js',
            wrap: '"use strict";\n\n <%= __ngModule %>',
            name: 'config',
            constants: '<%= fixtures.staging %>'
        }],

        production: [{
            dest: 'src/app/config.js',
            wrap: '"use strict";\n\n <%= __ngModule %>',
            name: 'config',
            constants: '<%= fixtures.production %>'
        }]
    }
}
