module.exports = function(grunt) {
    return {
        options: {
            files: [
                "package.json",
                "bower.json"
            ],
            commit: true,
            commitMessage: 'chore(release): v%VERSION%',
            commitFiles: [
                "package.json",
                "bower.json"
            ],
            createTag: true,
            tagName: 'v%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'origin'
        }
    }
}
