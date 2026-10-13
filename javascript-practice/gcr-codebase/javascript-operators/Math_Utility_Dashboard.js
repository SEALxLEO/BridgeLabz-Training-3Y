// Q3: Math Utility Dashboard

let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`
Math Utility Dashboard
----------------------
Number: ${x}
Rounded: ${roundedValue}
Square root: ${squareRoot}
Power (x^3): ${power}
Random number (10-50): ${randomNumber}
`);
