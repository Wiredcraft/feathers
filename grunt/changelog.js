module.exports = function(grunt) {
    return {
        options: {
            dest: 'CHANGELOG.md',
            template: 'changelog.tpl',
            github: 'https://github.com/Wiredcraft/feathers'
        }
    }
}
