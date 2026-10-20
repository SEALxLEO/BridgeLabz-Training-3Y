"use strict";

const input = Number.parseInt(process.argv[2], 10);
const limit = Number.isInteger(input) && input > 0 ? input : 5;

for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}

// Replacing let with var still works here because each loop uses the current value.
// In a debugger, watch i and j to see their reuse.
// Strict mode catches undeclared loop variables.
