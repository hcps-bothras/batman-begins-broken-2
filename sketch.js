const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops=[];
var maxDrops = 50;

function setup(){
   var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine);
    background (0)
    
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()   
    } 
}   
