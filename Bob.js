class Bob
{
    constructor(x,y)
    {
        //in matter.js the circle object has radius=20
        this.body=Bodies.circle(x,y,25,{
            isStatic:false,
            restitution:1,
            friction:1,
            density:2
        });
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        fill("pink");
        ellipseMode(CENTER);
        //the circle object has d=50 corresponding to 25 radius
        circle(pos.x,pos.y,50);

    }

}