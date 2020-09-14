class Stone{
    constructor(x,y,height,width){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
    this.image = loadImage("sprites/stone.png")

    }
    display(){
        var position =this.body.position;
        rectMode(CENTER);
        rect(position.x, position.y, this.width, this.height);
        image(this.image,0,200,width,height);
    }
}