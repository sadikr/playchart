module.exports = function(grunt){
	'use strict';
	
	// load all grunt tasks matching the 'grunt-*' pattern
	require('load-grunt-tasks')(grunt);

	// configure the tasks
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		// jshint task.
		jshint: {
			files : ['Gruntfile.js','app/**/*.js'],
			jshintrc: true
		},
		// static server task
		connect : {
			'static':{
				options : {
					host: 'http',
					hostname : 'localhost',
					port:9999,
					keepalive:true,
					base: ['.'],
				}
			},
		},
		// grunt-open will open the browser with the provide project url.
		open : {
			'open':{
				path : '<%connect.static.host%>://<%connect.static.hostname%>:<%connect.static.port%>'
			}
		},

		// grunt-watch to keep an eye on the code. 
		watch : {
			
		}
		
	});

	// register tasks
	grunt.registerTask('validate',['jshint']);
	grunt.registerTask('default',['open','watch','connect:static']);
	
};