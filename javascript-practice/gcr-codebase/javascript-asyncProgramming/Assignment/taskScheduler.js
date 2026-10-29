// Q2
console.log("Start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Synchronous log");
console.log("End");

// Microtasks run before macrotasks.
