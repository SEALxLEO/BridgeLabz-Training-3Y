// Subject marks
const marks = [88, 92, 75, 85, 90];

// Calculate total and check for failing grades
let totalMarks = 0;
let isDetained = false;

for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
  if (marks[i] < 35) {
    isDetained = true;
  }
}

// Calculate percentage (assuming out of 100 per subject)
const percentage = (totalMarks / 500) * 100;

// Evaluate performance
if (isDetained || percentage < 50) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else {
  console.log("Promoted");
}