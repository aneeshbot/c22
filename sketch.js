// Matter. World - reperesents Physical world
// Matter.Engine - physics engine - that which follows the laws of physics
// Matter. Bodies - Create a rect/ circular bodies/objects - used to represent the physcial objecjts in the world

// namespacing

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ball
var ground;

function setup() {
  createCanvas(600,600);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(300,600,600,50, {isStatic:true});

  

  World.add(myWorld,ground);
var ball_options = {
  restitution: 1.0
}
 ball = Bodies.circle(100,100,20,ball_options)
 World.add(myWorld,ball);

} 

function draw() {
  background(0);  

  Engine.update(myEngine);

  rectMode(CENTER)
  rect(300,300,50,50)
  //fill("red")
  //text("x = " + mouseX + ", " + "y= "+ mouseY, mouseX, mouseY)

  rect(ground.position.x, ground.position.y, 600,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20)
 
  
}