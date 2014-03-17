module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');
    return {
        fixtures: {
            options: {
                partials: 'stencil/includes',
                templates: 'stencil/templates',
                env: {
                    pkg : pkg,
                    homelink : 'http://' + pkg.name,
                    linkdesc : 'Just take me back to ' + pkg.name + ' →',
                    404 : {
                        title : '404 panda!',
                        desc : 'Looks like the page you’re looking for doesn’t exist.'
                    },
                    505 : {
                        title : 'Looks like something went wrong!',
                        desc : 'We track these errors automatically, but if the problem persists feel free to contact us.'
                    }
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
