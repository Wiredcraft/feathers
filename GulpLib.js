var gulp        = require('gulp');
var clean       = require('gulp-clean');
var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');

var path    = require('path');
var lib     = path.resolve(__dirname, 'lib');
var build   = path.resolve(__dirname, 'build');

var vendor = path.resolve(__dirname, 'vendor');
var vendorJS = [
    vendor + '/angular/angular.js',
    vendor + '/angular-route/angular-route.js',
    vendor + '/angular-cache/dist/angular-cache.js',
    vendor + '/angular-cookies/angular-cookies.js',
    vendor + '/angular-sanitize/angular-sanitize.js',
    vendor + '/angular-ui-router/release/angular-ui-router.js',
    vendor + '/underscore/underscore.js'
];
var vendorCSS = [
    vendor + '/normalize-css/normalize.css',
];

// Lib.
gulp.task('lib', function() {
    gulp.src(vendorCSS)
        .pipe(concat('vendor.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(lib))

    gulp.src(vendorJS)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(lib))
});

// Clean.
gulp.task('lib-clean', function() {
    return gulp.src([build, lib], {
        read: false
    }).pipe(clean())
});
