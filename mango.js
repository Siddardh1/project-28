class mango{
    constructor(x, y, diametre) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':1.0,
        }
        this.body = Bodies.circle(x, y, diametre/2 , options);
        this.diametre=diametre;
        this.image=loadImage("Plucking mangoes/mango.png")
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diametre,this.diametre);
        pop();
      }

      
}