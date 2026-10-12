// Purchase total
const totalPurchase = 6500;
let discountPercent = 0;

// Determine discount tier
if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
}

// Calculate final price
const discountAmount = (totalPurchase * discountPercent) / 100;
const finalPrice = Math.round(totalPurchase - discountAmount);

// Output breakdown
console.log(`Original total: $${totalPurchase}`);
console.log(`Discount percentage: ${discountPercent}%`);
console.log(`Final price after discount: $${finalPrice}`);