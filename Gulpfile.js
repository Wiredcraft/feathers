var gulp        = require('gulp');
var clean       = require('gulp-clean');
var coffee      = require('gulp-coffee');
var coffeelint  = require('gulp-coffeelint');
var ngConstant  = require('gulp-ng-constant');
var ngHtml2Js   = require('gulp-html2js');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var gutil       = require('gulp-util');
var sass        = require('gulp-sass');
var eggshell    = require('eggshell');
var minifyCSS   = require('gulp-minify-css');

var path    = require('path');
var root    = path.resolve(__dirname);
var src     = path.resolve(__dirname, 'src');
var lib     = path.resolve(__dirname, 'lib');
var dist    = path.resolve(__dirname, 'dist');

// Include lib tasks.
require('./GulpLib');

// Clean.
gulp.task('clean', function() {
    return gulp.src([dist], {
            read: false
        })
        .pipe(clean())
});

gulp.task('sass', function() {
    return gulp.src(src + '/scss/style.scss')
        .pipe(sass({
            includePaths: eggshell.includePaths
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(dist + '/assets'))
});

// Copy all static assets.
gulp.task('copy', function() {
    gulp.src([src + '/index.html', lib + '/**/*'])
        .pipe(gulp.dest(dist));

    gulp.src(src + '/assets/**/*')
        .pipe(gulp.dest(dist + '/assets'));
});

// html2js.
gulp.task('html2js', function() {
    return gulp.src(src + '/templates/*.tpl.html')
        .pipe(ngHtml2Js({
            outputModuleName: 'templates',
            base: 'src'
        }))
        .pipe(concat('templates.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist))
});

// CoffeeScript
gulp.task('coffee-client', function() {
    return gulp.src(src + '/app/*.coffee')
        .pipe(coffeelint({
            max_line_length: {
                value: Infinity
            },
            indentation: {
                value: 4
            }
        }))
        .pipe(coffeelint.reporter())
        .pipe(coffee().on('error', gutil.log))
        .pipe(concat('build.js'))
        .pipe(gulp.dest(dist))
});

// Config.
gulp.task('config', function() {
    return gulp.src(root + '/config.json')
        .pipe(ngConstant())
        .pipe(concat('config.js'))
        .pipe(gulp.dest(dist))
});

// Watch task
gulp.task('watch', function() {
    gulp.watch([src + '/app/**/*.coffee'], ['coffee-client']);
    gulp.watch([src + '/index.html', src + '/assets/**/*'], ['copy']);
    gulp.watch(src + '/scss/**/*.scss', ['sass']);
    gulp.watch(src + '/templates/*.tpl.html', ['html2js']);
});

gulp.task('client', ['clean'], function() {
    gulp.start('config', 'coffee-client', 'sass', 'copy', 'html2js');
});

gulp.task('deploy', ['lib', 'clean'], function() {
    gulp.start('config', 'coffee-client', 'sass', 'copy', 'html2js');
});