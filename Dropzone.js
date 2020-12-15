class DropZone{
    constructor(x,y,width,height){
        var options={
       isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options);
       
       this.width=width
       this.height=height
       
    }
       
    display(){
        
        var pos=this.body.position;
    var angle=this.body.angle;
        push()
        fill("red")
       
        translate(pos.x,pos.y)
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        
        
        

        pop();
    }
}