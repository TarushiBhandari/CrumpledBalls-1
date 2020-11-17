var trash;
var ground;
var side1,side2,side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,680,1200,10);
	trash= new Paper(200,450,70);
    side1= new Dustbin(780,625,15,100);
	side2= new Dustbin(697,667,150,15);
	side3= new Dustbin(620,625,15,100);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  trash.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Paper.position= trash.position;
		Matter.Body.applyForce(trash.body,trash.body.position,{x:130,y:-145});
		trash.isStatic= true;
	}
}
