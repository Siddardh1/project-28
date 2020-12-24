class tree{
    constructor(x,y){
       var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,20,20,options)
        this.image=loadImage("Plucking mangoes/tree.png")
       
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("green");
        image(this.image,pos.x, pos.y,300,500);
      }
    }
