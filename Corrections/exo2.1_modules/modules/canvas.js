class Canvas {
    constructor(width, height) {
        this.canvas = document.getElementById("drawable");
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
        this.shapes = [];           // init: no shape referenced
    }

    // add a shape into the drawable (more exactly added under the supervision of the canvas)
    addShape(shape) {
        this.shapes.push(shape);
    }
    // remove a shape from the drawable (more exactly removed from the supervision of the drawable)
    removeShapeByName(name) {
        this.shapes = this.shapes.filter(shape => shape.name !== name);
    }

    draw() {
        this.shapes.forEach(shape => {
            shape.draw(this.ctx);
        })
    }

    // refresh -> clear and draw
    refresh() {
        this.ctx.reset();
        this.draw();
    }
}

export { Canvas };