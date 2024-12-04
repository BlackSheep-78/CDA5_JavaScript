import { Shape } from "../modules/shape.js";
import { Point } from "./point.js";

class Circle extends Shape {
    constructor(name, x, y, radius, color) {
        super(name, color);
        this.center = new Point(x, y);    // type Point
        this.radius = radius;             // type integer
    }

    getX() { return this.center.getX(); }
    getY() { return this.center.getY(); }

    // absolute position of cercle: it means absolute position of its center
    goTo(x, y) {
        this.center.move(position);
    }

    // relative position: its means moving the center of the circle object
    move(dx, dy) {
        this.center.move({x:dx, y:dy});
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.getX(), this.center.getY(), this.radius, 0, 2 * Math.PI);       
        ctx.fillStyle = `rgb(${this.color.R} ${this.color.G} ${this.color.B}`;
        ctx.fill();
        ctx.lineWidth = 0;
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}

export { Circle };
 