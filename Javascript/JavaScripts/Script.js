var x=10;
var y=10;
var w=20;
var h=30;

var speed =2;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var update = function(){
	if(x>(canvas.width+w/2))
		speed=-2;
	else if(x<(-w*2))
		speed=2;
	x+=speed;
};

var draw = function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = "rgb(200,0,200)";
	ctx.fillRect(x,y,w,h);
};

var step = function(){
	update();
	draw();
	window.requestAnimationFrame(step);
};

step();