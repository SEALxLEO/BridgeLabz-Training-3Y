"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const data = JSON.parse(rawData[i]);

        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        const age = Number(data.age);
        if (Number.isNaN(age)) {
            throw new Error("Invalid age");
        }

        const entry = { user: data.user, age };
        clean.push(entry);

        if (age < 18) {
            under18.push(entry);
        }
    } catch (error) {
        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("Clean data:", clean);
console.log("Under-18 users:", under18);

// Debug: place a breakpoint inside catch to inspect error flow.
