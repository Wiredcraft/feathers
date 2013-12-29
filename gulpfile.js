var gulp = require('gulp')
var rimraf = require('gulp-rimraf')

/**
 * clean task
 */
gulp.task('clean', function() {
    gulp.src('build/**')
        .pipe(rimraf())
})

/**
 * copy task
 */
gulp.task('copy', function() {
  gulp.src('client/img/**')
    .pipe(gulp.dest('build/img'));

  gulp.src('client/css/**')
    .pipe(gulp.dest('build/css'));

  gulp.src('client/*.html')
    .pipe(gulp.dest('build'));
});
