class Drops{
    constructor (x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,5,options);
        this.x = x;
        this.y = y;
        this.radius = 5
        World.add(world, this.body);
    }

    updateY(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, this.body.radius,this.body.radius);
        pop();
    }
}