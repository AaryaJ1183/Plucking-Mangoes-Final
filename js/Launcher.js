class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 50
        }
        this.pointB = pointB
        this.launcher = Matter.Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(body){
        this.launcher.bodyA = body;
    }

    display(){
     strokeWeight(3);
     if(this.launcher.bodyA){
         line(this.launcher.bodyA.position.x, this.launcher.bodyA.position.y, 
            this.pointB.x, this.pointB.y);
     }
        }
    }
    
    
