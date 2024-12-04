/*
 *  This is an abstract class for Circle, Rectangle, ... (any shape)
 *  It allows to share common properties of the shapes
 *  and it can be useful for managing a collection of shapes of any kind.
 */

class Shape {
    constructor(name, color) {
        // The following 3 lines avoid instantiating this class directly (for testing)
        if (this.constructor === Shape) {
            throw new TypeError('Abstract class "Shape" cannot be instantiated directly');
        }

        this.name = name;       // label and/or identifier
        this.color = color;     // must be a litteral object {R: , G: , B: }
        this.surface = 0;       // not yet computed; you must use calculateSurface() method of the children class
    }
}

export { Shape };
