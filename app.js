const readline = require('readline'); // Library to input values.

const Point = require('./models/point'); 
const Line = require('./models/line'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function getInput(prompt, callback) {
    rl.question(prompt, (input) => {
        const numberInput = parseFloat(input);
        if (isNaN(numberInput) || numberInput === undefined) {
            console.log('Invalid input. Please enter a valid number.');
            getInput(prompt, callback); // Ask for input again
        } else {
            callback(numberInput);
        }
    });
}

getInput('Enter x for Point 1:', (x) => {
    getInput('Enter y for Point 1:', (y) => {
        const point1 = new Point(x, y);

        getInput('Enter x for Point 2: ', (x) => {
            getInput('Enter y for Point 2: ', (y) => {
                const point2 = new Point(x, y);

                const line = new Line(point1, point2); 
                console.log(line.getDistance());  
            }); 
        });
    });
});