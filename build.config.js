module.exports = {

    build_dir: 'build',
    compile_dir: 'bin',

    dev_port: 5000,

    app_files: {
        js: ['src/**/*.js', '!src/**/*.spec.js'],
        jsunit: ['src/**/*.spec.js'],

        atpl: ['src/app/**/*.tpl.html'],
        ctpl: ['src/common/**/*.tpl.html'],

        html: ['src/index.html'],
        scss: ['src/scss/**/*.{scss,sass}']
    },

    test_files: {
        js: [
            'vendor/angular-mocks/angular-mocks.js'
        ]
    },

    vendor_files: {
        js: [
            "vendor/angular/angular.js",
            'vendor/angular-ui-router/release/angular-ui-router.min.js',
            'vendor/angular-ui-utils/modules/route/route.js'
        ],
        css: [],
        assets: [
            'vendor/normalize-css/normalize.css',
            'vendor/offline/themes/offline-theme-dark.css'
        ]
    },

    /**
     * Useful when you need to specify environment
     */
    fixtures: {
        development: {
            ENV: 'development'
        },
        staging: {
            ENV: 'staging'
        },
        production: {
            ENV: 'production'
        }
    }
};
