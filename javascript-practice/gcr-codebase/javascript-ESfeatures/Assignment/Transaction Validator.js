"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class NegativeAmountError extends Error {}
class MissingFieldError extends Error {}
class NullTransactionError extends Error {}

const valid = [];
const invalid = [];

// Add a breakpoint here to inspect each transaction.
for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new NullTransactionError("Null transaction");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new MissingFieldError("Missing id or amount");
        }
        if (transaction.amount < 0) {
            throw new NegativeAmountError("Negative amount");
        }

        valid.push(transaction);
    } catch (error) {
        invalid.push({ transaction, type: error.constructor.name, message: error.message });
    }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);
