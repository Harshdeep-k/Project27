class Rope
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY},
          }
          this.chain=Matter.Constraint.create(options);
          World.add(world,this.chain);
          
    }
    fly()
    {
        this.chain.bodyA=null;
    }
    display()
    {
        if(this.chain.bodyA)
        {
            var a=this.chain.bodyA.position;
            var b=this.chain.bodyB.position;
            strokeWeight(2);
            line(a.x,a.y,b.x+this.offsetX,b.y+this.offsetY);
        }
        
    }
   
}