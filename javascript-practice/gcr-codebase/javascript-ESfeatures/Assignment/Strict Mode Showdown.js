// Without strict mode, duplicate parameters are allowed and total becomes a global.
// With strict mode, duplicate parameters and delete total are syntax errors.

function demoLoose(a, a) {
    total = 10;
    console.log(a, total);
}

demoLoose(5, 10);

// Correct ES6 version:
"use strict";

function demoStrict(first, second) {
    const total = 10;
    console.log(first, second, total);
}

demoStrict(5, 10);

// Strict mode prevents accidental globals and invalid delete operations.
