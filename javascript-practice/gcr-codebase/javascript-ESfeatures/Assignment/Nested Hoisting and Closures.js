"use strict";

function outer() {
    console.log(count); // undefined: outer count is hoisted.
    var count = 5;

    function inner() {
        console.log(count); // undefined: inner count is hoisted.
        var count = 10;
        console.log(count);
    }

    inner();
    console.log(count);
}

outer();

// Arrow version has the same lexical scope and hoisting behavior for this example.
function outerArrow() {
    console.log(count);
    var count = 5;

    const inner = () => {
        console.log(count);
        var count = 10;
        console.log(count);
    };

    inner();
    console.log(count);
}

outerArrow();

// Debug: watch both count variables and inspect outer -> inner call stack.
