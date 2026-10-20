"use strict";

function showMessage() {
    // Strict mode rejects assignment to an undeclared variable.
    let greeting = "Welcome";
    const watchValue = greeting; // Watch this in VS Code.
    console.log(greeting);
    console.log("Watch:", watchValue);
}

showMessage();

// Debug: set a breakpoint in showMessage and inspect the Call Stack.
