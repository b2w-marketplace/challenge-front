'use strict';

// Gulp Plugins
var gulp 		= require('gulp'),
    plugins     = require('gulp-load-plugins')({    // Load all gulp plugins automatically
        rename: {
            'gulp-ruby-sass': 'sass'
        }
    }),
    stylish     = require('jshint-stylish'),        // jshint
    browserSync = require('browser-sync').create(), // BrowserSync
    reload      = browserSync.reload,               // Reload
    pkg         = require('./package.json'),        // Package.json include directories
    dirs        = pkg['configs'].directories,

    // General files
	_files		= ['*.php', '*.html', 'build/**/*'];

    // COPY --------------------------------------------------------------

        gulp.task('copy:angular', function () {
            return gulp.src(dirs._components+"/angular/angular.js")
                        .pipe(plugins.replace('/*!', '/*'))
                        .pipe(plugins.rename({suffix: ".min"}))
                        .pipe(plugins.uglify())
                        .pipe(gulp.dest(dirs._build+'/js/libs/'));
        });

        gulp.task('copy:normalize', function () {
            return gulp.src(dirs._components+'/normalize.css/normalize.css')
                        .pipe(plugins.replace('/*!', '/*'))
                        .pipe(plugins.rename('normalize.scss'))
                        .pipe(gulp.dest(dirs._assets+'/scss/3.base'));
        });

    // IMAGES -------------------------------------------------------------

        //Sprite
        gulp.task('sprite', function () {
            var spriteData = gulp.src(dirs._assets+'/img/sprite/*.png').pipe(plugins.spritesmith({
                imgName: 'sprite.png',
                cssName: 'icons.scss',
                cssFormat: 'scss',
                algorithm: 'binary-tree',
                cssVarMap: function (sprite) {
                    if(sprite.name.indexOf('-hover') !== -1){
                        sprite.name = 'a:hover .ico-'+sprite.name;
                    } else {
                        sprite.name = '.ico-'+sprite.name;
                    }
                },
                cssTemplate: dirs._assets+'/scss/4.components/icons.mustache'
            }));
            spriteData.img.pipe(gulp.dest(dirs._build+'/img/sprite/'));
            spriteData.css.pipe(gulp.dest(dirs._assets+'/scss/4.components/'));
        });

	// STYLES ------------------------------------------------------------

        //main.min.css
        gulp.task('sass', () =>

    	    plugins.sass(dirs._assets+'/scss/main.scss',
                {
                    sourcemap: true,
                    trace: true,
                    noCache: true,
                    style: "compressed"
                })
                .pipe(plugins.rename({suffix: ".min"}))
                .on('error', function (err) { console.log(err.message); })
                .pipe(plugins.sourcemaps.write('.'))
                .pipe(gulp.dest(dirs._build+"/css"))
                .pipe(plugins.livereload())
                .pipe(reload({stream:true}))
    	);

	// SCRIPTS  ----------------------------------------------------------

		// JShint
		gulp.task('lint', ['concat'], function() {
			return gulp.src(dirs._assets+'/js/*.js')
                .pipe(plugins.jshint())
                .pipe(plugins.jshint.reporter(stylish))
                .pipe(plugins.jshint.reporter('default'));
		});

		// Concat
		gulp.task('concat', function() {

			// scripts.min.js
			gulp.src([
    				dirs._build+'/js/libs/angular.min.js',
                    dirs._assets+'/js/*.js'
				])
    		    .pipe(plugins.concat('scripts.js'))
    		    .pipe(gulp.dest(dirs._build+"/js"))
    		    .pipe(plugins.rename({suffix: ".min"}))
    		    .pipe(plugins.uglify())
    		    .pipe(gulp.dest(dirs._build+"/js"))
                .pipe(plugins.livereload())
    		    .pipe(reload({stream:true}));

		});

	// BROWSER SYNC ------------------------------------------------------
    	gulp.task('browser-sync', function() {
            browserSync.init({
                proxy: "local.b2w.desafio/"
            });
    	});


        gulp.task('connect', function() {
            plugins.connect.server({
                root: [__dirname],
                livereload: true
            });
        });

	// WATCH -------------------------------------------------------------
    	gulp.task('watch', function() {

            // Livereload
            plugins.livereload.listen();

            // watch Files
            gulp.watch(['*.*'], ['sass']);

    		// watch JS
            gulp.watch([dirs._assets+'/js/*.js', dirs._sg_assets+'/js/*.js'], ['lint']);

    		// watch CSS
            gulp.watch(dirs._assets+'/scss/**/*.scss', ['sass']);

            // watch IMAGES
            gulp.watch([dirs._assets+'/img/sprite/*.png'], ['sprite']);

    	});

	// RUN TASKS ---------------------------------------------------------
    	gulp.task('default', 	['connect', 'watch', 'copy']);
    	gulp.task('sync', 		['watch', 'browser-sync']);
        gulp.task('images',     ['sprite']);
    	gulp.task('css', 		['sass']);
        gulp.task('js',         ['lint', 'concat']);
        gulp.task('copy',       [
                                    'copy:angular',
                                    'copy:normalize'
                                ]);
