module.exports = {

  build_dir: 'build',
  compile_dir: 'bin',

  "dev_port": 5000,

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
  ngconstant: {
    options: {
      space: ' '
    },

    // target
    development: [{
      dest: 'src/app/config.js',
      wrap: '"use strict";\n\n <%= __ngModule %>',
      name: 'config',
      constants: {
        ENV: 'development'
      }
    }],
    staging: [{
      dest: 'src/app/config.js',
      wrap: '"use strict";\n\n <%= __ngModule %>',
      name: 'config',
      constants: {
        ENV: 'staging'
      }
    }],
    production: [{
      dest: 'app/config.js',
      wrap: '"use strict";\n\n <%= __ngModule %>',
      name: 'config',
      constants: {
        ENV: 'production'
      }
    }]
  }
};
