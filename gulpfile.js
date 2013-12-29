var gulp = require('gulp')
var rimraf = require('gulp-rimraf')
var compass = require('gulp-compass')

/**
 * clean task
 */
gulp.task('clean', function() {
    gulp.src(['build/**', 'bin/**'])
        .pipe(rimraf())
})

/**
 * compile compass
 */
gulp.task('compass', function() {
  gulp.src('src/scss/*.scss')
    .pipe(compass({
        config_file: 'compass.config.rb'
    }))
})
