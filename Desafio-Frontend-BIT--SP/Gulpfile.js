var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function() {
    gulp.src('public/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/assets/css'))
});

gulp.task('default',function() {
    gulp.watch('public/assets/sass/**/*.scss',['css']);
});