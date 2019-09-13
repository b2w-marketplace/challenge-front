module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		 uglify : {
	      options : {
	        mangle : false
	      },
	 
	      my_target : {
	        files : {
				'dist/js/build.min.js' : [ 'src/_js/build.js' ]
	        }
	      }
	    }, // uglify
		compass: {
			dist: {   
			  options: {
				sassDir: 'src/sass',
				cssDir: 'dist/css',
				environment: 'production'
			  }
			},
			dev: {                    
			  options: {
				sassDir: 'src/sass',
				cssDir: 'dist/css',
				imagesDir: 'assets/img/',
        		outputStyle: 'compressed',
        		outputStyle: 'compressed',
        		environment: 'development',
        		noLineComments: false
			  }
			}
		},
		watch: {
			compass: {
			   files: ['**/*.{scss,sass}'],
			   tasks: ['compass:dev']
			  },
			  js: {
				files: 'src/_js/**/*',
				tasks: [ 'uglify' ]
			  }
		}

	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['uglify', 'watch', 'compass']);
};