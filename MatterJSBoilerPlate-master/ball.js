class Ball{
constructor(x,y,r){
    var options={
    restitution: 0.4,
    friction:0.4,
    density:1.0   
    }
this.body=Bodies.circle(x,y,r,options)
this.x=x
this.y=y
this.r=r
World.add(world,this.body)
}
display(){
    ellipseMode(RADIUS)
    fill("red")
ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
}
}