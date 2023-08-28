class Point {
    constructor(x, y) {
        // Add validation to enforce the input of numbers.
        if (typeof x !== 'number' || typeof y !== 'number') {
            // throw new Error('Both x and y must be numbers');
        }
        this.x = x;
        this.y = y;
    }

    // Add a method or behavior to get specific Quandrant from the values of X and Y; 
    getQuadrant() {
        if(this.x > 0 && this.y > 0) {
            return(`Q1`);
        }else if (this.x < 0 && this.y > 0) {
            return(`Q2`); 
        }else if(this.x < 0 && this.y < 0) {
            return('Q3');
        }else if(this.x!=0 && this.y === 0) {
            return('Q4'); 
        }else if(this.x!=0 && this.y==0) {
            return('X axis');
        }else if(this.x===0 && this.y!=0) {
            return('Y axis'); 
        }else if(this.x==0 && this.y== 0) {
            return('Origin'); 
        }
    }
}

module.exports = Point; 