'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

 

 //Styles
gulp.task('styles', function () {
  return gulp.src('./app/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/styles/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});
 

gulp.task('server', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});




gulp.task('w',['server'], function () {
  gulp.watch('./app/styles/**/*.scss', ['styles']);
  gulp.watch('./app/**/*.html', ['html']);
});
