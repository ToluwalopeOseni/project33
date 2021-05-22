const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;


var bg;
var ice=[];

var engine,world;
function preload()
{
  bg=loadImage("snow3.jpg");

}
function setup() {
  createCanvas(800,400);


  engine=Engine.create();
  world= engine.world;

  if(frameCount % 200 === 0)
  {
    for(var i=0; i<100; i++)
    {
      ice.push(new Snow(random(0,1350), random(0,50)));
    }
  }
  
}

function draw() {
  background(bg);  

  Engine.update(engine);


  for(var i = 0;i < 100; i++){
    ice[i].display();
    ice[i].changePosition();
    }    

  drawSprites();
}