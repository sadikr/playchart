/*jshint global*/
module.exports = function(grunt){
	"use strict";

	var appConfig = {
		_dirname : "app",
		_dist : "dist",
		_doc : "doc"
	};
	//////////////////////////////////////////////////////////
	// load all grunt tasks matching the "grunt-*" pattern //
	//////////////////////////////////////////////////////////
	/*jshint global*/
	require("load-grunt-tasks")(grunt);

	/**
	 * [grunt.initConfig configure the tasks with grunt]
	 * @return {[type]}
	 */
	grunt.initConfig({

		pkg : grunt.file.readJSON("package.json"),
		
		////////////////////
		// grunt-jshint //
		////////////////////
		jshint: {
			options: {
				jshintrc: true
			},
			"gruntfile" :{
				files : {
					src : ["Gruntfile.js"]
				}
			},
			"application" : {
				files: {
					src : ["<%=appConfig._dirname%>/**/*.js"]
				}
			}
		},

		//////////////////////
		// grunt-express  //
		//////////////////////
		express : {
			all : {
				options : {
					host:"http",
					port: 9000,
					hostname: "localhost",
					bases : [appConfig._dirname],
					livereload: true
				}
			}
		},

		//////////////////
		// grunt-open //
		//////////////////
		open :{
			all: {
				path: "<%=express.all.options.host%>://<%=express.all.options.hostname%>:<%=express.all.options.port%>"
			}
		},

		////////////////////////////////////////////////
		// grunt-watch to keep an eye on the code.  //
		////////////////////////////////////////////////
		watch : {
			all : {
				options: {
	    			dateFormat: function(time) {
			      		grunt.log.write('The watch finished in ' + time + 'ms at' + (new Date()).toString());
			      		grunt.log.write('Waiting for more changes...');
		      		},
		      		livereload: true
			    },
			    files : [appConfig._dirname+"/**/*.js"],
			    // tasks : ['validate:application']
			}
		}
		
	});

	/////////////////////
	// register tasks //
	/////////////////////
	grunt.registerTask("validate",["jshint:gruntfile","jshint:application"]);
	grunt.registerTask("server",["express","open","watch"]);
};