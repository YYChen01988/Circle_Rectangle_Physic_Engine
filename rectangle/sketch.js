var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var box1;
var boxes = [];

var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200, height-50, width, 60, options);
  World.add(world, ground);
}

function mouseDragged(){
  boxes.push(new Box(mouseX, mouseY, random(10, 30), random(10,50)));
}

function draw() {
  background(51);
  for (var i=0; i< boxes.length; i++){
    boxes[i].show()
  }
  noStroke(255);
  fill(170);
  strokeWeight(4);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 60);
}
