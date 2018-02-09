var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require("gulp-cssmin");
var rename = require('gulp-rename');

gulp.task('minify-css', function(){
    gulp.src('app/assets/css/style.css')
    .pipe(cssmin())
	.pipe(rename({
	    suffix: '.min'
	}))       
    .pipe(gulp.dest('app/assets/css'));
});

gulp.task('sass', function() {
  return gulp.src('app/assets/sass/**/*.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))    
})

gulp.task('watch', function(){
  gulp.watch('app/assets/sass/**/*.scss', ['sass']); 
  gulp.watch(css, ['minify-css']);
})

