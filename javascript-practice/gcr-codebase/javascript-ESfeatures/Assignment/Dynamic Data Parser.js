"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
    const number = Number(value);
    const boolean = Boolean(value);
    const string = String(value);

    console.log(`Value: ${string} | Number: ${number} | Boolean: ${boolean} | String: "${string}"`);

    // Number("") and Number(" ") are 0, so whitespace is handled separately.
    const isWhitespace = typeof value === "string" && value.trim() === "";
    const isValid = !isWhitespace && !Number.isNaN(number) &&
        (typeof value !== "string" || value.trim() !== "NaN") &&
        (typeof value !== "string" || !/px$/i.test(value.trim()));

    if (isValid) {
        validNumbers.push(number);
    } else {
        invalidNumbers.push(value);
        console.log(`Invalid number: ${String(value)}`);
    }
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
