// Q8: Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedTotal = cart.reduce((total, product) => {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 0.10;
    } else if (product.category === "fashion") {
        discount = 0.05;
    }

    return total + product.price * (1 - discount);
}, 0);

let cartValue = cart.reduce((total, product) => total + product.price, 0);

if (cartValue > 50000) {
    discountedTotal *= 0.95;
}

console.log(`Cart value: ${cartValue}`);
console.log(`Final total: ${discountedTotal.toFixed(2)}`);
