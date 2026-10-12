// Generate secret number and set guess
const secret = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;

// Evaluate guess
if (userGuess === secret) {
  console.log("Correct guess!");
} else if (Math.abs(secret - userGuess) <= 3) {
  console.log("Very close!");
} else if (userGuess > secret) {
  console.log("Too high");
} else {
  console.log("Too low");
}