class Bob{
    constructor(x,y,r){
        var options ={
            isStatic:false,
            restitution:0.7,
            friction:0,
            density:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);
    }
display(){
    var  Bobpos = this.body.position;
    push()
    translate(Bobpos.x,Bobpos.y)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r);
    pop()
}
    }
