class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.5,
            friction: 0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("s.png");
    }

    display(){
        var pos = this.body.position;
        push();
        noStroke();
        translate(pos.x,pos.y);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        fill(this.color);
        ellipse(0,0,this.radius*2);
        pop();
    }
}