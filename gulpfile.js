'use strict';

var gulp = require("gulp")
    , cssmin = require('gulp-cssmin')
    , rename = require('gulp-rename')
    , imagemin = require("gulp-imagemin")
    , clean = require("gulp-clean")
    , browserSync = require("browser-sync")
    , sass = require("gulp-sass")
    , minify = require('gulp-minify');

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
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/css'));
});

gulp.task('compress', function() {
  gulp.src('src/js/*/*.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('src/js'))
});

// Using browser-sync for refresh my page at dev developing 
gulp.task('default', function () {
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