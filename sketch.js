const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var particles =[];
var plinkos=[];

var  division=[];
var  divisionHeight=300

function setup() {
  createCanvas(4800,800);
  engine = Engine.create();
    world = engine.world;
  for(var k=0;k<=width;k=k+80){
division.push( new Division (k,height-divisionHeight/2,10,divisionHeight))
 }

 

for(var j=40;j<width;j=j+50){
  plinkos.push(new Plinko(j,75))

}
}

function draw() {
  background(0);  
  for(var k=0;k<division.length;k++) {
    division[k]. display ()}
  
   for(var j =0;j<particles.length;j++){
   particles[j].display();

   }
  drawSprites();
}