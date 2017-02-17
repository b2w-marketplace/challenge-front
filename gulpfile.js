const gulp = require('gulp');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-ruby-sass');

gulp.task('scripts', function() {
    return gulp.src([
        'coreModule.js',
        'coreFct.js',
        'coreCtrl.js',
    ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
    }),

gulp.task('css', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.css',
        'node_modules/ng-dialog/css/ngDialog.min.css',
        'node_modules/ng-dialog/css/ngDialog-theme-default.min.css'
    ])
        .pipe(concat('allcss.css'))
        .pipe(gulp.dest('./dist/css'));
    }),

gulp.task('imagemin', function() {
    return gulp.src('img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img')
        )
}),

gulp.task('sass', function() {
    return sass('style.sass')
        .on('error', sass.logError)
        .pipe(gulp.dest('./dist/css'))
});