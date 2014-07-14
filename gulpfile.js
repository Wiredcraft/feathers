'use strict';

var gulp = require('gulp');
var wiredep  = require('wiredep').stream;
var cached = require('gulp-cached');

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
    .pipe(gulp.dest('build/scripts'))
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
gulp.task('transpile', ['sass', 'coffee', 'js', 'vendorjs', 'vendorcss'])
