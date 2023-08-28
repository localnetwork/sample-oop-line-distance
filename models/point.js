class Point {
    #x;
    #y; 

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    setX(x) {
        // Add validation to enforce the user to input a number. 
        if (x === undefined) {
            throw new Error('Y must be a number');
        }

        // Add validation the input should not be empty.  
        if(isNaN(x)) {
            throw new Error('Y should not be empty.')
        }

        this.#x = x; 
    }

    setY(y) {
        // Add validation to enforce the user to input a number. 
        if (y === undefined) {
            throw new Error('Y must be a number');
        }

        // Add validation the input should not be empty.  
        if(isNaN(y)) {
            throw new Error('Y should not be empty.')
        }

        this.#y = y; 
    }

    getX() {
        return this.#x; 
    }
    
    getY() {
        return this.#y; 
    }

    // Add a method or behavior to get specific Quandrant from the values of X and Y; 
    getQuadrant() {
        if(this.#x > 0 && this.#y > 0) {
            return(`Q1`);
        }else if (this.#x < 0 && this.#y > 0) {
            return(`Q2`); 
        }else if(this.#x < 0 && this.#y < 0) {
            return('Q3');
        }else if(this.#x!=0 && this.#y === 0) {
            return('Q4'); 
        }else if(this.#x!=0 && this.#y==0) {
            return('X axis');
        }else if(this.#x===0 && this.#y!=0) {
            return('Y axis'); 
        }else if(this.#x==0 && this.#y== 0) {
            return('Origin'); 
        }
    }
}

module.exports = Point; 