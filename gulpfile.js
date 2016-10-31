var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass        = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var path = require('path');
var rename = require('gulp-rename');
var copy = require('gulp-contrib-copy');


var publicFolder = './public';

gulp.task('serve', function() {
    browserSync.init({
    	port: 3000,
        startPath: '/index.html',
        server: {
            baseDir: publicFolder
        }
    });

    gulp.watch("src/sass/*.sass", ['sass-compile']);
    gulp.watch("src/js/*.js", ['scripts']);
    gulp.watch("src/*.html", ['minify-html']);
});

gulp.task('sass-compile', function () {
    return gulp.src('src/sass/app.sass')
        .pipe($.sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({'browsers': ['last 5 versions', '> 1%']})
        ]))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(path.join(publicFolder, 'css')))
        .pipe(browserSync.stream());
});


gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(publicFolder))
    .pipe(browserSync.stream());
});


gulp.task('copy', function() {
    gulp.src('./bower_components/font-awesome/fonts/*')
        .pipe(copy())
        .pipe(gulp.dest(path.join(publicFolder, 'fonts')));
});


gulp.task('scripts', function() {
  return gulp.src([
  		'./src/js/app.js'
  	])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(path.join(publicFolder, 'js')))
    .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);
