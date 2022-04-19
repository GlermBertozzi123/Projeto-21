
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var r = 40

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(260,100,r/2,ball_options)
	World.add(world,ball)

	Engine.run(engine);

	groundObj = new Ground(800,670,width,20)
	leftSide = new Ground(1000,630,20,40)
	rightSide = new Ground(1200,630,20,40)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,r)

	groundObj.show()
	leftSide.show()
	rightSide.show()


  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:75,y:-75})
	}
}



