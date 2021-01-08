const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const body=Matter.Body;
var engine,helicopterImage,packageImage,helicopter,Package,Packagebody,ground1;
var box1,box2,box3;

function preload(){

	helicopterImage=loadImage("helicopter.png")
	packageImage=loadImage("package.png")

}

function setup(){

	var canvas=createCanvas(700,700)
	rectMode(CENTER)

	engine=Engine.create();
	world=engine.world;

	Package=createSprite(350,300,10,10)
	Package.addImage(packageImage)
	Package.scale=0.3

	var options={
		'restitution':1,
		'isStatic':true
	}
	
	Packagebody=Bodies.circle(350,300,5,options)
	World.add(world,Packagebody)

	ground1=new ground(350,670,700,10)

	 
	box1=new BOX(265,615,20,100)
	box2=new BOX(390,615,20,100)
	box3=new BOX(330,655,120,20)
	box1.shapeColor="red"
	box2.shapeColor="red"
	box3.shapeColor="red"

	helicopter=createSprite(350,200,20,20)
	helicopter.addImage(helicopterImage)
	helicopter.scale=1
	World.add(world,helicopter)

	Engine.run(engine)
	//Engine.update(engine)

}

function draw(){
	
	background("pink")
	//Packagebody.collide(ground)
	//keypressed();
    ground1.display();
	Package.x=Packagebody.position.x
	Package.y=Packagebody.position.y

	drawSprites();
	

	//Package.display();
	box1.display();
	box2.display();
	box3.display();
}
function keyPressed() {

	 if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(Packagebody,false);
	  
	}
  }
  /*
 function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
} */