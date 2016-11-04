var gulp = require("gulp"),
    nodemon = require('gulp-nodemon'),
    less = require('gulp-less'),
    inject = require('gulp-inject'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    print = require('gulp-print'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    es2015 = require('babel-preset-es2015'),
    sourcemaps = require('gulp-sourcemaps'),
    clean = require('gulp-clean'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('transpile', function() 
{

});

gulp.task('less', function() {

    return gulp.src('public/**/*.less')
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('www'))
        .pipe(livereload());
});

gulp.task('includePublic', ['transpile', 'less'], function() {

    var target = gulp.src('views/*.html');

    var sources = gulp.src(
        ['www/*.js', 'www/*.css'], { read: false, relative: true }
    );

    return target.pipe(inject(sources, { ignorePath: 'www', addRootSlash: true }))
        .pipe(gulp.dest(function(file) {
            return file.base;
        }));;
});

gulp.task('includeScripts', ['transpile', 'less', 'includePublic'], function() {

    var target = gulp.src('views/*.html');

    gulp.src('www/lib', { read: false })
        .pipe(clean({ force: true }));

    gulp.src(['bower_components/**/*.js', 'bower_components/**/*.map', 'bower_components/**/*.css'])
        .pipe(rename({ dirname: '' }))
        .pipe(gulp.dest('www/lib'))
        .on('end', function() {

            var sources = gulp.src(
                ['www/lib/*.*'], { read: false, relative: true }
            );

            return target.pipe(inject(sources, { ignorePath: 'www', addRootSlash: true, name: 'scripts' }))
                .pipe(gulp.dest(function(file) {
                    return file.base;
                }));
        });

});

gulp.task('exec', ['less', 'transpile', 'includeScripts', 'includePublic'], function() {

    var stream = nodemon({
        script: 'server/server.js',
        env: { 'NODE_ENV': 'development' }
    }).on('restart', function() {
        console.log('Server restarted');
    });

    gulp.watch("public/**/*.js", ["transpile"]);
    gulp.watch("public/**/*.less", ["less"]);

    return stream;
})

gulp.task('default', ['exec']);
