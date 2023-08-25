const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
let max = Math.max(canvas.width, canvas.height)
let canvasHeight = max + 300
let canvasWidth = max + 300
let alpha = 0.9
let mouseDown = false
let mouse = {
    x: 0,
    y: 0
}

addEventListener('mousemove',(event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize',() => {
    location.reload()
})

addEventListener('mousedown',() => {
    mouseDown = true
})
addEventListener('mouseup',() => {
    mouseDown = false
})
class Star {
    constructor() {
        this.position = {
            x:Math.random() * canvasWidth - canvasWidth/2,
            y:Math.random() * canvasHeight - canvasHeight/2
        }
        this.radius = Math.random()*3
        this.color = colors[Math.floor(Math.random()*colors.length)]
        this.radians = 1
        this.velocity = -0.01
    }
    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, true)
        c.shadowColor = this.color
        c.shadowBlur = 20
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }
    update() {
        this.draw()
    }
}
let stars = []
for(let i=0;i<600;i++) {
    stars.push(new Star())
} 
let radians = 0
let update = 0.005
function animate() {
    requestAnimationFrame(animate)
    c.rect(0, 0, canvas.width, canvas.height)
    c.fillStyle = `rgba(10, 10, 10, ${alpha})`
    c.fill()
    c.save()
    c.translate(canvas.width/2, canvas.height/2)
    c.rotate(radians)
    stars.forEach(star => {
        star.update()
    })
    c.restore()
    radians += update
    
    
    if(mouseDown && alpha>=0.3) {
        alpha -= 0.01
        update = 0.01
    }else if(!mouseDown && alpha<=1) {
        alpha += 0.01
        update = 0.005
    }

}
animate()