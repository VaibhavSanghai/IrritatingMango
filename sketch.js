const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyUploader; 

function preload () {
	var boyUploader = loadImage("Plucking mangoes/boy.png"); 
}

function setup () {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(); 
	mango2 = new Mango(); 
	mango3 = new Mango(); 
	mango4 = new Mango(); 
	mango5 = new Mango(); 

	stoneObject = new StoneforThrowing(); 

	treeStanding = new Tree(); 

	ground = new Ground(); 

	chain = new ChainBS(); 

	Engine.run(engine);
}


function draw () {
  rectMode(CENTER);
  background(0);
  
  mango1.display(); 
  mango2.display(); 
  mango3.display(); 
  mango4.display(); 
  mango5.display(); 

  stoneObject.display();
  
  treeStanding.display(); 

  ground.display(); 

  //log6.display();
  launcherObject.display();   

  detectcollision(stoneObject, mango1); 
  detectcollision(stoneObject, mango2); 
  detectcollision(stoneObject, mango3); 
  detectcollision(stoneObject, mango4); 
  detectcollision(stoneObject, mango5); 
  
  drawSprites();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObject, {x: 235, y: 425}); 
		launcherObject.attach(stoneObject.body); 
	}
}

function detectcollision(stone, mango) {
	mangoBodyPosition = mango.body.position; 
	stoneBodyPosition = stone.body.position; 

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y); 

	if (distance <- mango.r + stone.r) {
		Matter.Body.setStatic(mango.body, false); 
	}
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcherObject.fly();
}