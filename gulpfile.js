'use strict';

var gulp = require("gulp")
    , imagemin = require("gulp-imagemin")
    , clean = require("gulp-clean")
    , browserSync = require("browser-sync")
    , sass = require("gulp-sass");

gulp.task('copy', ['clean'], function () {
    gulp.src("src/**/*")
        .pipe(gulp.dest("dist"));
});

// Clean folder 'dist/'
gulp.task('clean', function () {
    return gulp.src('dist').pipe(clean());
});

gulp.task('minify-image', function () {
    gulp.src("src/img/**/*")
        .pipe(imagemin())
        .dest("src/img");
});

// Using gulp plugin for sass
gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

// Using browser-sync for refresh my page
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
});

// Events watch
gulp.watch("src/**/*").on('change', function () {
    browserSync.reload();
});

gulp.watch("src/scss/**/*.scss", ["sass"]);