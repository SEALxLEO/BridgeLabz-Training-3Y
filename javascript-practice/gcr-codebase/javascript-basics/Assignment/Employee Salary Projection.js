// Initial values
let currentSalary = 50000;
const annualIncrementRate = 5; // 5%
const projection = [];

// Compute 5-year projection
for (let year = 1; year <= 5; year++) {
  currentSalary += currentSalary * (annualIncrementRate / 100);
  projection.push({
    Year: year,
    Salary: Math.round(currentSalary)
  });
}

// Print table
console.table(projection);