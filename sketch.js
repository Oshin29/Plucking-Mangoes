
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var groundObj, tree1,stone1,boy1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   groundObj = new Ground(600,height,1200,20);
   tree1 = new Tree(500,600);
   stone1 = new Stone(200,height,20,20);
   boy1 = new Boy(200,600,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree1.display();
  groundObj.display();
  stone1.display();
  boy1.display();
  

  drawSprites();
 
}



