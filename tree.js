class Tree {

    constructor() {

        

        this.body = Bodies.rectangle(850,425,20,20,{isStatic : true});
        
        this.width = 500;
        this.height = 500;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position; 

        rectMode(CENTER);
        fill("");
        stroke("");
        rect(pos.x,pos.y,1,1);
        image(this.image,pos.x-250,pos.y-250,this.width,this.height)
        
    }
}