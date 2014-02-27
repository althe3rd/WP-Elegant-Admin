module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['wp-clean-admin.js'],
        dest: 'js/wp-clean-admin-master.min.js'
      }
    },
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'compressed'
      },
      files: {                         // Dictionary of files
        'main.css': 'wp-clean-admin.scss',      // 'destination': 'source'
        'wp-admin-master.css': 'build.scss'
      }
    }
  },
  
	autoprefixer: {
    options: {
      // Task-specific options go here.
    },
    single_file: {
      options: {
        // Target-specific options go here.
      },
      src: 'main.css',
      dest: 'build.scss'
    },
  },  
  concat: {
    options: {
      separator: ' ',
    },
    dist: {
      src: ['main.css', 'mobile.css'],
      dest: 'master.css',
    },
  },
  watch: {
	  scripts: {
	    files: ['*.js'],
	    tasks: ['uglify'],
	    options: {
	      livereload: true,
	    },
	  },
	  css: {
	    files: '**/*.scss',
	    tasks: ['sass','autoprefixer','sass'],
	    options: {
	      livereload: true,
	    },
	   },
	  
	   html: {
	    files: '**/*.php',
	   
	    options: {
	      livereload: true,
	    },
	   },

	    
	  
	},
	
	grunticon: {
    myIcons: {
            files: [{
                expand: true,
                cwd: 'img',
                src: ['*.svg', '*.png'],
                dest: "dist"
            }],
        options: {
      }
    }
    },
	
	imagemin: {                          // Task
	    dynamic: {                         // Another target
	      files: [{
	        expand: true,                  // Enable dynamic expansion
	        cwd: 'img/',                   // Src matches are relative to this path
	        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
	        dest: 'dist/'                  // Destination path prefix
	      }]
	    }
	  }
    
  });
  grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-grunticon');
  

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('default', ['sass2']);
  grunt.registerTask('default', ['autoprefixer']);
  grunt.registerTask('default', ['concat']);
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('default', ['imagemin']);
  
 

};