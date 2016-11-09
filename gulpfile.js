'use strict'

const gulp = require("gulp"),
    nodemon = require('gulp-nodemon'),
    babel = require('gulp-babel'),
    es2015 = require('babel-preset-es2015'),
    sass = require('gulp-sass'),
    inject = require('gulp-inject'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    print = require('gulp-print'),
    del = require('del'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('gulp-clean');


gulp.task('cleanFolder', () => {
    return del('dist');
});

gulp.task('transpile', function() {

    return gulp.src('app/**/*.js')
        .pipe(babel({
            presets: [es2015]
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {

    return gulp.src('app/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('includePublic', ['transpile', 'sass'], () => {

    const target = gulp.src('views/*.html');

    const sources = gulp.src(
        ['dist/*.js', 'dist/*.css'], { read: false, relative: true }
    );

    return target.pipe(inject(sources, { ignorePath: 'dist', addRootSlash: true }))
        .pipe(gulp.dest(function(file) {
            return file.base;
        }));;
});

gulp.task('includeScripts', ['transpile', 'sass', 'includePublic'], () => {

    const target = gulp.src('views/*.html');

    gulp.src('dist/lib', { read: false })
        .pipe(clean({ force: true }));

    gulp.src(['scripts/**/*.js', 'scripts/**/*.map', 'scripts/**/*.css'])
        .pipe(rename({ dirname: '' }))
        .pipe(gulp.dest('dist/lib'))
        .on('end', () => {

            const sources = gulp.src(
                ['dist/lib/*.*'], { read: false, relative: true }
            );

            return target.pipe(inject(sources, { ignorePath: 'dist', addRootSlash: true, name: 'scripts' }))
                .pipe(gulp.dest(function(file) {
                    return file.base;
                }));
        });

});

gulp.task('exec', ['cleanFolder', 'sass', 'transpile', 'includeScripts', 'includePublic'], () => {

    const stream = nodemon({
        script: 'server/server.js',
        env: { 'NODE_ENV': 'development' }
    }).on('restart', () => {
        console.log('Server restarted');
    });

    gulp.watch("app/**/*.ts", ["transpile"]);
    gulp.watch("app/**/*.js", ["transpile"]);
    gulp.watch("app/**/*.scss", ["sass"]);

    return stream;
})

gulp.task('default', ['exec']);
