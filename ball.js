class Ball{
    constructor(x, y){
        var ball_option = {
            isStatic :false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        circle.body = Matter.Bodies.circle(x, y, 40, ball_option)
        World.add(world, circle.body)
        this.image = loadImage("paper.png")
    }
    display(){
        var pos = circle.body.position
        push()
        //translate(pos.x, pos.y)
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 60, 60)
        pop()
    }
}