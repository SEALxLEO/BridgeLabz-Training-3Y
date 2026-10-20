"use strict";

console.log(score); // var is hoisted and starts as undefined.
announce();
var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";
startGame();

function startGame() {
    console.log(status);
}

// Arrow functions are not hoisted like function declarations.
const startArrow = () => console.log(status);
startArrow();

// Debug: inspect score before its assignment and the call stack at breakpoints.
