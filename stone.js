class Stone {

    constructor () {

        var options = {
           isStatic : false,
           restitution : 0,
           friction : 1,
           density : 1.2 
        }

        this.body = Bodies.rectangle(50,500,5,5,options);
        this.width = 50;
        this.height =50;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    
    display() {

        var pos = this.body.position

       ellipseMode(CENTER);
      ellipse(pos.x,pos.y,10,10);
        image(this.image,pos.x-25,pos.y-25,this.width,this.height)
    }
    
}