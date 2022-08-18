;(function(){
	module.exports=function(_g){

		var app = _g.app;
		var http = _g.http;

		function route(){
			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			//1. enetry point
			app.listen(8801,function(){
			  console.log('GIX AR Server listen on *:8801');
			});
		}

		var publicReturn = {
			route:route,
		}
		return publicReturn;
	}

})();



