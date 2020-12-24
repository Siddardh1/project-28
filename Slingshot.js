class Slingshot{
    constructor(bodyA,B){
        var options = {
            bodyA: bodyA,
            pointB: B,
            stiffness: 0.004,
            length: 10
        }
        this.pointB=B
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    birdfly()
    {
        this.Sling.bodyA=null

    }

    display(){
        if(this.Sling.bodyA)
        {
            var pointA = this.Sling.bodyA.position;
            var pointb = this.pointB
            strokeWeight(4);
            stroke("yellow")
            line(pointA.x, pointA.y, pointb.x, pointb.y);
        }
        }
        
     
    
}