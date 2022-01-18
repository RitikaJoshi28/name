class Slingshot
{
     constructor(bodyA,pointB)
     {
        var options=
        {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
         }
         fly()
         {
             this.sling.bodyA=null;
         }
         display()
         {
             if(this.sling.bodyA)
             {
                 var point=this.sling.bodyA.position;
                 var point=pointB;
                 strokeWeight(4);
                 AudioListener(pointA.x,pointAx,pointB.x,pointB.y);
             }
         }
}
