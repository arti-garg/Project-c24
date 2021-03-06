
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, d1, d2, d3, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper= new Paper(130, 680, 20);
ground = new Ground(400, 690, 800, 10)
d1= new Dustbin(550, 680, 280, 20);
d2= new Dustbin(420,620, 20, 100 );
d3= new Dustbin(680,620, 20, 100 );
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
 d1.display(); 
 d2.display();
 d3.display();
 ground.display();
 
  drawSprites();

 
}

function keyPressed()
{

if (keyCode===UP_ARROW){


	Body.applyForce(paper.body, paper.body.position, {x:55, y:-55});
}


}

