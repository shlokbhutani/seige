const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon,pimg,ground;
var engine,world;
var gameState="onSling";

function preload(){
pimg=loadImage("polygon.png");
}

function setup() {

  createCanvas(800,800);

  engine = Engine.create();
    world = engine.world;
  stroke(255)

   ground = new Ground(300,height,1600,20);
   platform = new Ground(455,height-120,240,20);
  box1 = new Box(365,height-150,30,40);
  box2 = new Box(395,height-150,30,40);
  box3 = new Box(425,height-150,30,40);
  box4 = new Box(455,height-150,30,40);
  box5 = new Box(485,height-150,30,40);
  box6 = new Box(515,height-150,30,40);
  box7 = new Box(545,height-150,30,40);
  box9 = new Box(410,height-190,30,40);
  box10 = new Box(440,height-190,30,40);
  box11 = new Box(470,height-190,30,40);
  box12 = new Box(500,height-190,30,40);
  box13= new Box(440,height-230,30,40);
  box14= new Box(470,height-230,30,40);
  box15= new Box(455,height-270,30,40);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
slingshot = new Slingshot(this.polygon,{x:100,y:500});


  Engine.run(engine);
}

function draw() {

  background(0);  
  
  ground.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
imageMode(CENTER);
image(pimg,polygon.position.x,polygon.position.y,40,40);
slingshot.display();

}
function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState="launched";
}