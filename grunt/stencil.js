module.exports = function(grunt) {
    return {
        fixtures: {
            options: {
                partials: 'stencil/includes',
                templates: 'stencil/templates',
                env: {
                    package: grunt.file.readJSON('package.json')
                }
            },
            files: [{
                expand: true,
                cwd: 'stencil/fixtures',
                src: '*.html',
                dest: 'static',
                ext: '.html',
                flatten: true
            }]
        }
    }
}
