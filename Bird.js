class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.trajectory=[];//created an empty array to store the x and y value of bird
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
if(this.body.velocity.x>10 && this.body.position.x>200)
{
  var position= [this.body.position.x,this.body.position.y];
  this.trajectory.push(position);
}

   
    
    //console.log(this.body.velocity.x);
   // console.log(this.body.position.x);
    //initialization, condition; increementation
    for(var i=0;i<this.trajectory.length;i++)
    {
image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])

    }
    
  }
}
