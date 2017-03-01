var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task("minificar", function () {
	return gulp.src(['public/js/**/*.js']).pipe(uglify()).pipe(gulp.dest('build/js')); 
});

gulp.task('watch', function () {
    gulp.watch('public/js/**/*.js', function (event) {
        gutil.log('O arquivo '+ event.path +' foi '+ event.type +', rodando tarefas...');
        gulp.run('minificar');
    });
});