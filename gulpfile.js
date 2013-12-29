var gulp = require('gulp')
var clean = require('gulp-clean')

/**
 * clean task
 */
gulp.task('clean', function() {
    gulp.src('build/**')
        .pipe(clean())
})
