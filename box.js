$(function(){
	
	var canvas 	= $('#canvas')[0];
	var ctx 	= canvas.getContext('2d'); 
	var c_width = canvas.width;
	var c_height= canvas.height;
	var p_width = 55.0;
	var ppm 	= c_width/p_width;

	// for some unknown reasons
	ctx.setTransform(ppm,0,0,-ppm,0,c_height);

	var worldAABB 	= new b2AABB();
	worldAABB.lowerBound.Set(-10000.0,-10000.0);
	worldAABB.upperBound.Set(10000.0,10000.0);
	var gravity   	= new b2Vec2(0.0,-9.8);
	var world     	= new b2World(worldAABB,gravity,true);
	window.world 	= world;

	var groundBodyDef = new b2BodyDef();
	groundBodyDef.position.Set(p_width/2.0,3.0);
	var groundBody 	  = world.CreateBody(groundBodyDef);

	var groundShapeDef = new b2PolygonDef();
	groundShapeDef.restitution = 0.0;
	groundShapeDef.friction  = 0.5;
	groundShapeDef.density	 = 1.0;
	
})