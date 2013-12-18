module.exports = function(grunt) {
    return {
        src: [
            '<%= app_files.js %>'
        ],
        test: [
            '<%= app_files.jsunit %>'
        ],
        gruntfile: [
            'Gruntfile.js'
        ],
        // see http://www.jshint.com/docs/options/
        options: {
            ignores: ['src/common/primus.js', 'src/app/config.js'],
            asi: true,
            immed: true,
            trailing: true,
            newcap: true,
            noarg: true,
            sub: true,
            boss: true,
            eqnull: true
        }
    }
}
