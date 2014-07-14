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

// Paths
var PATH = {
  sass: 'src/assets/scss',
  vendor: 'vendor',

  build: 'build'
}

// Sass
gulp.task('sass', function() {
  return gulp.src(PATH.sass + '/style.scss')
    .pipe(cached('sass'))
    .pipe($.sass({
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(wiredep({
      directory: PATH.vendor
    }))
    .pipe(gulp.dest(PATH.build + '/assets/css'))
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
    .pipe(gulp.dest(PATH.build + '/vendors'))
    .pipe($.size());
});

// Vendor css
gulp.task('vendorcss', function() {
  return gulp.src('vendor/**/*.css')
    .pipe(gulp.dest(PATH.build + '/vendors'))
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

// Images
gulp.task('images', function() {
  return gulp.src('src/assets/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('build/assets/images'))
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
    .pipe($.inject($.bowerFiles({read: false}), {
      ignorePath: ['src'],
      starttag: '<!-- bower:{{ext}} -->',
      endtag: '<!-- endbower -->'
    }))
    .pipe($.inject(gulp.src([
      'build/scripts/**/*.js',
      'build/assets/**/*.css'
      ], {
        read: false
      }), {
      ignorePath: ['build'],
      starttag: '<!-- inject:{{ext}} -->',
      endtag: '<!-- endinject -->'
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
      moduleName: 'feathersPartials'
    }))
    .pipe(gulp.dest('build/app'));
});

// useref