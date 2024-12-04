/*
 *  Internal class that manages geometrical point en 2D space.
 *  From outside our system (and to be compatible with the canvas API),
 *  points are manipulated by their x and y coordinates.
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // getters
    getX() { return this.x; }       // get X axis coordinate
    getY() { return this.y; }       // get Y axis coordinate

    /*
     *  Go to an absolute position.
     *  Parameters: position: Point
     */

    goTo(position) {
        this.x = position.x;
        this.y = position.y;
    }

    /*
     *  Go to a relative position according to a translation vector
     *  Parameters: translation: Point. A Point object can be used as vector's coordinates.
     */

    move(translation) {
        this.x += translation.x;
        this.y += translation.y;
    }
}

export { Point };
