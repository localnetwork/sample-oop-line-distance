const readline = require('readline'); // Library to input values.

const Point = require('./models/point'); 


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter x:', (x) => {
    rl.question('Enter y:', (y) => {
        const point = new Point(x, y);

        console.log(point.getQuadrant()); 
    });
});