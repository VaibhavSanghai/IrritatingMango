class Mango {
    constructor() {
        var options = {
            isStatic: false, 
            restitution: 0, 
            friction: 1, 
            density: 1.2
        }

        this.body = Bodies.rectangle();
        World.add(world, this.body); 
    }

    display() {
        
    }
}