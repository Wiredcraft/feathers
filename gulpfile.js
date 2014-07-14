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
gulp.task('sass', function () {
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