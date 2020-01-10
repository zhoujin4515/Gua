var GuaGame = function() {
    var o = {
        actions: {},
        keydowns: {},
    }
    o.canvas = document.querySelector('#id-canvas')
    o.context = o.canvas.getContext('2d')

    // draw
    o.drawImage = function(guaImage) {
        o.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }
    // events
    window.addEventListener('keydown', function(event) {
        o.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        o.keydowns[event.key] = false
    })
    // 注册事件
    o.registerAction = function(key, callback) {
        o.actions[key] = callback
    }

    var loop = function() {
        var keys = Object.keys(o.actions) 
        for(var i = 0; i < keys.length; i++) {
            if(o.keydowns[keys[i]]) {
                o.actions[keys[i]]()
            }
        }
        // update
        o.update()
        // clear
        o.context.clearRect(0, 0, o.canvas.width, o.canvas.height)
        // draw
        o.draw()
        setTimeout(() => {
            loop()
        }, 1000/window.fps);
    }
    setTimeout(() => {
        loop()
    }, 1000/window.fps);

    return o
}