
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
bImg = loadImage("boy.png");
bg = loadImage("bg.jpg");	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree  =new Tree();

	ground = new Ground();

	stone = new Stone();

	boy = createSprite(100,520,50,50);
	boy.addImage(bImg);
	boy.scale = 0.1;

	rope = new Rope(stone.body,{x : 50,y : 470});

	m1 = new Mango(800,350,50);
	m2 = new Mango(900,350,70);
	m3 = new Mango(775,250,50);
	m4 = new Mango(950,300,50);
	m5 = new Mango(700,345,60);
	m6 = new Mango(875,250,65);
	m7 = new Mango(1000,355,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  tree.display();

  ground.display();

  stone.display();

  rope.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();

  keyPressed();

  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);
  
  drawSprites();

  textSize(25);
  fill("black");
  textFont("forte")
  strokeWeight(0.5);
  
  text("PRESS 'space' TO GET AN ANOTHER CHANCE",100,100);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	rope.fly();
}

function keyPressed() {
	if (keyDown("space")) {
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
		rope.attach(stone.body);
	}
}

function detectCollision(lstone,lmango) {

	mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if (distance < lmango.r + lstone.width) {
	Matter.Body.setStatic(lmango.body,false);
}
}








