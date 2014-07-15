'use strict';

var gulp = require('gulp');
var wiredep  = require('wiredep').stream;
var config   = require('config');
var cached   = require('gulp-cached');
var es       = require('event-stream');
var seq      = require('run-sequence');
var lazypipe = require('lazypipe');

var mainBowerFiles = require('main-bower-files');

// Load plugins
var $ = require('gulp-load-plugins')();

var LIVERELOAD_PORT = 35729;

// Paths
var vendor = [
  'vendor/angular/angular.js',
  'vendor/angular-ui-router/release/angular-ui-router.js'
]

// Sass
gulp.task('sass', function() {
  return gulp.src('src/assets/scss/style.scss')
    .pipe(cached('sass'))
    .pipe($.sass({
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(wiredep({
      directory: 'vendor'
    }))
    .pipe(gulp.dest('build/assets/css'))
    .pipe($.size());
});

// JS
gulp.task('js', function() {
  return gulp.src('src/app/**/*.js')
    .pipe(cached('js'))
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('default'))
    .pipe(gulp.dest('build/scripts'))
    .pipe($.size());
});

// Vendor
gulp.task('vendorjs', function() {
  return gulp.src('vendor/**/*.js')
    .pipe(gulp.dest('build/vendor'))
    .pipe($.size());
});

// Vendor css
gulp.task('vendorcss', function() {
  return gulp.src('vendor/**/*.css')
    .pipe(gulp.dest('build/vendor'))
    .pipe($.size());
});

// CoffeeScript
gulp.task('coffee', function() {
  return gulp.src('src/app/**/*.coffee')
    .pipe(cached('coffee'))
    .pipe($.coffee({bare: true}))
    .on('error', function(e) {
      $.util.log(e.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('build/app'))
    .pipe($.size());
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['dist/*', 'build/*'], {read: false})
    .pipe($.clean());
});

// Transpile
gulp.task('transpile', ['sass', 'coffee', 'js', 'vendorjs', 'vendorcss']);

// jade -> html
var jadeify = lazypipe()
  .pipe($.jade, {
    pretty: true
  });

// Inject global js vars
var injectGlobals = lazypipe()
  .pipe($.frep, [{
    pattern: '@@GLOBALS',
    replacement: JSON.stringify({
      OCTOPART_KEY: config.OCTOPART_KEY
    })
  }]);

// Jade to html
gulp.task('base-tmpl', function() {
  return gulp.src('src/index.jade')
    .pipe($.changed('build'))
    .pipe(jadeify())
    .pipe(injectGlobals())
    .pipe($.inject(gulp.src(vendor, {
      read: false
    }), {
      ignorePath: ['src'],
      starttag: '<!-- bower:{{ext}}-->',
      endtag: '<!-- endbower-->'
    }))
    .pipe($.inject(gulp.src([
      'build/app/**/*.js',
      'build/assets/**/*.css'
      ], {
        read: false
      }), {
      ignorePath: ['build'],
      starttag: '<!-- inject:{{ext}}-->',
      endtag: '<!-- endinject-->'
    }))
    .pipe(gulp.dest('build'))
    .pipe($.size());
});

// Jade to JS
gulp.task('js-tmpl', function() {
  return gulp.src('src/app/**/*.jade')
    .pipe(cached('js-tmpl'))
    .pipe(jadeify())
    .pipe($.ngHtml2js({
      moduleName: 'tpl'
    }))
    .pipe(gulp.dest('build/app'));
});

// useref

// Watch
gulp.task('watch', function() {
  var lr = require('tiny-lr')();

  lr.listen(LIVERELOAD_PORT);

  gulp.watch([
    'build/*.html',
    'build/assets/**/*.css',
    'build/app/**/*.js',
    'build/assets/images/**/*.*'
  ], function(event) {
    gulp.src(event.path, {read: false})
      .pipe($.livereload(lr));
  });

  // Wathch .scss files
  gulp.watch('src/assets/scss/**/*.scss', ['sass']);

  // Watch .js files
  gulp.watch('src/app/**/*.js', ['js']);

  // Watch .coffee files
  gulp.watch('src/app/**/*.coffee', ['coffee']);

  // Watch .jade files
  gulp.watch('src/index.jade', ['base-tmpl']);
  gulp.watch('src/app/**/*.jade', ['reload-js-tmpl']);

  // Watch vendor files
  gulp.watch('vendor/*', ['bowerjs', 'bowercss']);
})

// Build tasks for development
gulp.task('build', function(cb) {
  seq(
    'clean',
    'transpile',
    'js-tmpl',
    'base-tmpl',
    cb
  );
});

// Dev
gulp.task('dev', function(cb) {
  seq('build', 'watch', cb);
});

gulp.task('reload-js-tmpl', function(cb) {
  seq('js-tmpl', 'base-tmpl', cb);
});