class Tree{
    constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.width = 450;
		this.height = 600;
		this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);

        World.add(world, this.body);
		this.image = loadImage("sprites/tree.png");
		
		}
display(){
	var pos =this.body.position;
	//rectMode(CENTER);
	//rect(pos.x, pos.y, this.width, this.height);
	imageMode(CENTER);
	image(this.image,40,200,this.width,this.height);
}
	}
