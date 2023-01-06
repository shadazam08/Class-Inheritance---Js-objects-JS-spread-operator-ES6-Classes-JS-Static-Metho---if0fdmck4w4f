// import using require

// declare class


// export class using module.exports

/ export class using module.exports
module.exports = Shape;

// import using require
const Shape = require('./shape');

// declare class

class Circle extends Shape {
    calculateArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
}

// export class using module.exports

module.exports = Circle;
