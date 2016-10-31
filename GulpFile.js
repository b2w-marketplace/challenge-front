/**
 * Gulp File
 */

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var concat      = require('gulp-concat');

// create localhost & active browser sync
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
    gulp.watch("./sass/*.scss").on("change", reload);
});

// compile css on save in sass
gulp.task('sass-compile', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
gulp.task('sass', function () {
    gulp.watch('./sass/*.scss', ['sass-compile']);
});

// concat files
gulp.task('compile-js', function() {
  return gulp.src(['./js/angular.min.js', './js/script.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});
gulp.task('compile-css', function() {
  return gulp.src(['./css/bootstrap.min.css', './css/style.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./css/'));
});

