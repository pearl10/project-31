class Plinko{
    constructor(x,y,r) {
        var options = {
         setStatic=true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
      World.add(world, this.body);
    }
    display(){
   
        var pos=this.body.position;
        var angle=this.body.angle;

                                                                                                                                                                                                            
    push();
    traslate(pos.x,pos.y)
     rotate(angle)                                                                                                                                                                                                              
      noStroke();
       fill("white") 
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r)
     pop();
    }
}
