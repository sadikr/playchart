"use strict";
/**
 * [paths description]
 * @type {Object}
 */
requirejs.config({

	paths : {
		jquery : "components/jquery/dist/jquery.min",
		d3 : "components/d3/d3.min",
		playChart: "js/playChart"
	},

	shim : {
		d3 : {
			exports : 'd3'
		}
	},
});
/**
 * [description]
 * @param  {[type]} $ jQuery Object
 * @param  {[type]} d
 * @return {[type]}
 */
require(["playChart"],function(Chart) {
	// body...
	Chart.initialize({
		controllersEl : $("#button_wrapper"),
		chartEl : $("#chart_wrapper"),
		play : true,
		pause: false,
		stop: false,
		fastForward: false,
		rewind: false
	});
});