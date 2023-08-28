const Point = require('./point');



class Line {
    #point1;
    #point2; 


    constructor(point1, point2) {
        this.#point1 = point1;
        this.#point2 = point2;
    }

    getPoint1() {
        return this.#point1;
    }

    getPoint2() {
        return this.#point2; 
    }

    setPoint1(point1) {
        return this.point1 = point1; 
    }

    setPoint2(point2) {
        return this.point2 = point2;
    }

    getDistance() {
        let a = this.#point2.getY() - this.#point1.getY(); 
        let b = this.#point2.getX() - this.#point1.getX(); 

        let c = Math.sqrt(a*a + b*b);

        console.log('Distance is: ', c); 
    }

    lineLogTest() {
        console.log('this is a sample line log'); 
    }
}


module.exports = Line; 