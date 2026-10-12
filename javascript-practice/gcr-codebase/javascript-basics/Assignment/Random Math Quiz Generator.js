// Generate random numbers and operator
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const operators = ['+', '-', '*', '/'];
const op = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Calculate answer
switch (op) {
  case '+':
    correctAnswer = num1 + num2;
    break;
  case '-':
    correctAnswer = num1 - num2;
    break;
  case '*':
    correctAnswer = num1 * num2;
    break;
  case '/':
    correctAnswer = num1 / num2;
    break;
}

// Print question and answer
console.log(`Question: What is ${num1} ${op} ${num2}?`);
console.log(`Correct Answer: ${op === '/' ? correctAnswer.toFixed(2) : correctAnswer}`);