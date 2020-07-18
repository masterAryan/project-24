
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box1;
var ground;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2,650,800,50)
	box = new Box(width/1.5,580,10,100)
	box1 = new Box(width/1.2,580,10,100)
	Engine.run(engine);
	
  ball = new Ball(50,60,10);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box.display();
  box1.display();
  ball.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-12});

	}
}




