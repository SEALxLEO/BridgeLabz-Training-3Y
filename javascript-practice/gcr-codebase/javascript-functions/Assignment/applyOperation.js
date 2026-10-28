// Q2
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}
const numbers = [1, 2, 3, 4];
console.log("Double:", applyOperation(numbers, num => num * 2));
console.log("Square:", applyOperation(numbers, num => num * num));
