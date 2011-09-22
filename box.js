$(function(){
	
	var canvas 	= $('#canvas')[0];
	var ctx 	= canvas.getContext('2d'); 
	var c_width = canvas.width;
	var c_height= canvas.height;
	var ppm 	= c_width/55.0;

	// for some unknown reasons
	ctx.setTransform(ppm,0,0,-ppm,0,c_height);

	var worldAABB 	= new b2AABB();
	worldAABB.lowerBound.Set(-10000.0,-10000.0);
	worldAABB.upperBound.Set(10000.0,10000.0);
	var gravity   	= new b2Vec2(0.0,-9.8);
	var world     	= new b2World(worldAABB,gravity,true);
	window.world 	= world;

	var groundBodyDef = new b2BodyDef();
	
})