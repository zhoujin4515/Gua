var Ball = function() {
    var image = imageFromPath('./ball.png')
    var o = {
        image: image,
        x: 50, 
        y: 50, 
        speedX: 10,
        speedY: 10,
        fired: false
    }
    o.move = function() {
        if(o.fire) {
            if (o.x < 0 || o.x + o.image.width > 600) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y + o.image.height > 300) {
                o.speedY = -o.speedY
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.反弹 = function() {
        o.speedY *= -1
    }
    return o
}
