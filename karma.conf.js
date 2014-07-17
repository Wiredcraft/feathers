// Karma configuration
// Generated on Tue Mar 18 2014 20:56:04 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      // bower:js
      "app/bower_components/jquery/jquery.js",
      "app/bower_components/modernizr/modernizr.js",
      "app/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap.js",
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-ui-router/release/angular-ui-router.js",
      "app/bower_components/bootstrap/dist/js/bootstrap.js",
      "app/bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js",
      "app/bower_components/autotype/index.js",
      "app/bower_components/bootstrap-timepicker/js/bootstrap-timepicker.min.js",
      "app/bower_components/bootstrap-select/bootstrap-select.js",
      "app/bower_components/angular-strap/dist/angular-strap.min.js",
      // endbower

      // bower:css
      "app/bower_components/bootstrap/dist/css/bootstrap.css",
      "app/bower_components/bootstrap-datepicker/css/datepicker.css",
      "app/bower_components/bootstrap-datepicker/css/datepicker3.css",
      "app/bower_components/bootstrap-timepicker/css/bootstrap-timepicker.min.css",
      "app/bower_components/bootstrap-select/bootstrap-select.css",
      // endbower

      'test/unit/**/*.coffee'
    ],


    // list of files to exclude
    exclude: [

    ],

    client: {
      mocha: {
        ui: 'bdd'
      }
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/**/*.coffee': 'coffee'
    },

    coffeePreprocessor: {
      options: {
        bare: true,
        sourceMap: false
      },
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
