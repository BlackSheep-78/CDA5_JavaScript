import { Canvas } from "../modules/canvas.js";
import { Circle } from "../modules/circle.js";
import { Shape } from "../modules/shape.js";
import { Point } from "../modules/point.js";

/* ---------- Canvas creation ---------- */
const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 500;

let canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);

// the following lines are for testing purposes (abstract class)
try {
    let s1 = new Shape ({R:44, V:35, B:56});
} catch (error) {
    console.log(error.message);
}

let p1 = new Point(56,29);

// create  (at least)a circle and add it under the canvas management
let c1 = new Circle("C1", 0, 0, 40, {R:149, G:135, B:56});
canvas.addShape (c1);

// drawing of the canvas and its initial content
canvas.draw();


/* ---------- Animation engine// ---------- */

// define and initialize move parameters that will be used at each iteration
let xm = 20;
let ym = 10;

function update() {
    canvas.shapes.forEach(shape => {
        if ((shape.getX() > CANVAS_WIDTH) || (shape.getX() < 0)) xm = -xm;
        if ((shape.getY() > CANVAS_HEIGHT) || (shape.getY() < 0)) ym = -ym;
        shape.move(xm, ym);
    });
    canvas.refresh();
}

/* ---------- Animation UI ---------- */

// add the event listeners to the buttons
let refreshIntervalId;  // must be declared outside the callback in order to be shared among many of them

document.getElementById("start").addEventListener('click', (event) => {
    refreshIntervalId = setInterval(update, 200);
});

document.getElementById("stop").addEventListener('click', (event) => {clearInterval(refreshIntervalId)});

//let anonymousCircle;
document.getElementById("add-circle").addEventListener('click', (event) => {
    let anonymousCircle = new Circle("anonymousCircle", 0, 0, 50, {R:56, G:135, B:149});
    canvas.addShape (anonymousCircle);
});



