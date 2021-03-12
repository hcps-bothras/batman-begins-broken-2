const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops;
var maxDrops = 100;

function setup(){
   var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;

    for (var i =0; i<maxDrops; i++){
        drops.push(new Drops(random(0,600)),random(0,600));
    } 

    drops = new Drops (random(0,500),random(0,500), 10)
    
    

    
}

function draw(){
    background (0)
    
    drops.display(); 
}   

