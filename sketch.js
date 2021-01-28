
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dwall1, Dwall2, Dwall3
function preload()
{
	trashB = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(50, 300)
	ground = new Ground(600, 680, 1200, 40)
	ground2 = new Ground(590, 610, 20, 100)
	ground3 = new Ground(710, 610, 20, 100)
	Dwall1 = createSprite(650, 570, 100, 20)
	Dwall1.shapeColor = "red"
	Dwall1.addAnimation("trash", trashB)
	Dwall1.scale = 0.5
	Dwall2 = createSprite(590, 530, 20, 100)
	Dwall2.shapeColor = "red"
	Dwall2.visible = false
	Dwall3 = createSprite(710, 530, 20, 100)
	Dwall3.shapeColor = "red"
	Dwall3.visible = false
	groundSee = createSprite(600, 680, 1200, 40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball.display()
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(circle.body, circle.body.position,{x:120,y:-120})
	}
}



