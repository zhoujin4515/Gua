var Block = function(position) {
    // position 是[p1, p2]格式
    var image = imageFromPath('block.png')
    var o = {
        x: position[0],
        y: position[1],
        lives: position[2] || 1,
        image: image,
        alive: true,
    }
    o.kill = function() {
        o.lives--
        if(o.lives < 1) {
            o.alive = false
        }
    }
    o.collide = function(b) {
        // log('block', o.alive, b)
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}