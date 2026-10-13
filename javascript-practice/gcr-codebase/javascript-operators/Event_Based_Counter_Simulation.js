// Q6: Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log(`Count: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count: ${count}`);
}

function counterTest() {
    increment();
    increment();
    decrement();
}

increment();
increment();
decrement();
counterTest();
