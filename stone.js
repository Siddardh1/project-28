
class stone{
  constructor(x,y){
    var options={
          'restitution':0.1,
          'friction':1,
          'density':1.2
      }
      this.body=Bodies.rectangle(x,y,40,40,options)
      this.width=40
      this.height=40
      this.image=loadImage("Plucking mangoes/stone.png")
      World.add(world,this.body)
  }
  display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, 40,40);
    }
  
}