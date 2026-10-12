// Set conditions
const age = 19;
const isCitizen = true;

// Evaluate eligibility based on strict boundaries
if (isCitizen && age > 20) {
  console.log("Eligible for all services.");
} else if (isCitizen && age >= 18 && age <= 20) {
  console.log("Eligible to vote only.");
} else if (!isCitizen && age >= 18) {
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}