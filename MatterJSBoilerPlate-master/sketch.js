var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

ground=new Ground(400,690,800,20)
ball=new Ball(100,685,20)
dustbin1=new Dustbin(460,610,20,150)
dustbin2=new Dustbin(590,610,20,150)
//dustbin2=new Dustbin(600,21,20,70)
//dustbin3=new Dustbin(600,21,20,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display()
  ball.display()
dustbin1.display()
dustbin2.display()


  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-100})	
}	
}

