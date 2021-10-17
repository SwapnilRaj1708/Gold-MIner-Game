const canvas = document.querySelector('canvas');
const con = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
    constructor(x,y,radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        // this.velocity = velocity;
    }
    draw() {
        con.beginPath()
        con.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        con.fillStyle = this.color;
        con.fill();

    }
}
class Projectile {
    constructor(x,y,radius, color, vel) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        con.beginPath()
        con.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        con.fillStyle = this.color;
        con.fill();

    }
}
const xlen = canvas.width / 2;
const ylen = canvas.height / 2;
const player = new Player(xlen,0,30,'blue',0);
player.draw();


// console.log(con);
