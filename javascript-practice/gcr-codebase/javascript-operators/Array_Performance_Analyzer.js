// Q4: Array Performance Analyzer

let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

let doubledScores = scores.map(score => score * 2);
let passedStudents = scores.filter(score => score >= 50);
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

console.log(`
Performance Summary
-------------------
Scores: ${scores.join(", ")}
Highest: ${highestScore}
Lowest: ${lowestScore}
Average: ${averageScore.toFixed(2)}
Passed: ${passedStudents.length}
Mapped scores: ${doubledScores.join(", ")}
`);
