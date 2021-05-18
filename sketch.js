var bgIMG, bgSprite, boySprite,boyIMG;
var boyBody,ground
var boy2,boy2Img
var a,aImg
var s,sImg ,m
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	bgIMG=loadImage("bg.jpg")
	boyIMG=loadImage("boy.png")
	boy2Img=loadImage("boy2.png")
	aImg = loadImage("a.png")
	
	sImg = loadImage("s.png")
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);
	

	

	bgSprite=createSprite(width/2, 200, 10,10);
	bgSprite.addImage(bgIMG)
	bgSprite.scale=0.8


	boySprite=createSprite(width/2, 350, 10,10);
	boySprite.addImage(boyIMG)
	boySprite.scale=0.2


	a=createSprite(width/2, 50, 10,10);
	a.addImage(aImg)
	a.scale=0.2


	

	

	
	engine = Engine.create();
	world = engine.world;

	boyBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, boyBody);
	

	

	 


	Engine.run(engine);
   
}


function draw() {
 
  background(0);
  Engine.update(engine);
  
  

  
 if (keyCode === 32){

    boy2=createSprite(700, 350, 10,10);
	boy2.addImage(boy2Img)
	boy2.scale=0.5
	
	boySprite.destroy()
    
	m=createSprite(700, 150, 10,10);
	m.addImage(sImg)
	m.scale=2

	

	m=createSprite(300, 150, 10,10);
	m.addImage(sImg)
	m.scale=2
	
	
 }
  
 
 if(boyBody.position.y>= 640){
	
	boySprite=createSprite(width/2, 80, 10,10);
	boySprite.addImage(boyIMG)
	boySprite.scale=0.2
	boySprite.depth=1;
	boyBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, boyBody);
	console.log(boySprite);
 }
  drawSprites();
 
}





