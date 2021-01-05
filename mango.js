class Mango {


    constructor (x,y,r) {

        var options = {

            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
            
        }


        this.body = Bodies.circle(x,y,25,options);
        this.image = loadImage("mango.png");
        this.r = r;
        
        
        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;


        
        ellipseMode(CENTER);
        fill("white");
        strokeWeight (0)
        ellipse(pos.x,pos.y,10,10);
        image(this.image,pos.x-15,pos.y-30,this.r,this.r);
        
        
    }
}