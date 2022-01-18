class Polygon
{
    constructer()
    {
        bodyA:bodyA,
        bodyB:bodyB,
       pointA:pointA,
        pointB:pointB
     }
      polygon=Bodies.circle(50,200,20);

      World.add(world,polygon);
      slingShot=new Slingshot(this.polygon,{x:100,y:200});
      
         polygon.body.loadImage("polygon.png");
        
       
            
        
    display()
    {
      polygonMode(CENTER);
      polygon(polygon_img,polygon.positionX,polygon.positionY,40,40);
      

      }
    }