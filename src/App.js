;(function(){

	module.exports = function(){
		function global(){
			var express;
		}

		function loadNodeModules() {
			_g=new global();//static global
			_g.express = require('express');
			_g.app = require('express')();
		}

		function loadRoute() {
			var route = require('./Route.js')(_g);
			route.route();
		}

		function initialize(){
			var app=_g.app;
			app.set('view engine', 'ejs');
			app.engine('html', require('ejs').renderFile);
			app.use('/assets',_g.express.static(__dirname + '/../assets'));
		}

		function doInBackend(){
			loadNodeModules();
			initialize();
			loadRoute();
		}

		var publicReturn = {
			doInBackend:doInBackend,
		}
		return publicReturn;
	}

})();

