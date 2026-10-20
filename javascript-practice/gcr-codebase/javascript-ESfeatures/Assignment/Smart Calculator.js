"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class DivideByZeroError extends Error {}
class NegativeRootError extends Error {}
class InvalidOperationError extends Error {}

function calculate(operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "divide":
            if (num2 === 0) throw new DivideByZeroError("Cannot divide by zero");
            return num1 / num2;
        case "power":
            return num1 ** num2;
        case "root":
            if (num1 < 0) throw new NegativeRootError("Cannot root a negative number");
            return Math.sqrt(num1);
        case "subtract":
            return num1 - num2;
        default:
            throw new InvalidOperationError("Invalid operation");
    }
}

for (const operation of operations) {
    try {
        console.log(`${operation}: ${calculate(operation)}`);
    } catch (error) {
        console.log(`${operation}: ERROR - ${error.message}`);
    }
}
