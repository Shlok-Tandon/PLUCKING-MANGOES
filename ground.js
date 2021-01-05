class Ground {

    constructor() {

        this.body = Bodies.rectangle(600,670,800,20,{isStatic : true});

        this.width = width;
        this.height = height;
        
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position

        rectMode(CENTER);
        fill(0,230,0);
        stroke("lightgreen");
        strokeWeight(0);
        rect(pos.x,pos.y,1200,5);
        
    }
}