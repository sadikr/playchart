"use strict";
/**
 * [paths description]
 * @type {Object}
 */
requirejs.config({

	paths : {
		jquery : "components/jquery/dist/jquery.min",
		d3 : "components/d3/d3.min"
	},

	shim : {
		d3 : {
			exports : 'd3'
		}
	},

});
/**
 * [description]
 * @param  {[type]} $
 * @param  {[type]} d
 * @return {[type]}
 */
require(["jquery","d3","playChart"],function($,d) {
	// body...
});