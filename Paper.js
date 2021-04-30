class Paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.PaperWidth=200;
		this.PaperHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("paper.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.PaperWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.PaperWidth/2, this.y-this.PaperHeight/2, this.wallThickness, this.PaperHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.PaperWidth/2, this.y-this.PaperHeight/2, this.wallThickness, this.PaperHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.PaperHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.PaperHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.PaperHeight/2,this.PaperWidth, this.PaperHeight)
			//rect(0,0,this.PaperWidth, this.wallThickness);
			pop()
			
	}

}