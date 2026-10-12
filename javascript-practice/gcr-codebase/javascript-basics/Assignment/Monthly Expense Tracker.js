// Expenses: [food, travel, rent, bills, leisure]
const expenses = [150.50, 60.00, 500.00, 120.75, 80.00];

// Calculate total
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

// Calculate average and add tax
const average = total / expenses.length;
const totalAfterTax = total + (total * 0.10);

// Display formatted values
console.log(`Total: $${total.toFixed(2)}`);
console.log(`Average: $${average.toFixed(2)}`);
console.log(`Final Amount (with 10% tax): $${totalAfterTax.toFixed(2)}`);