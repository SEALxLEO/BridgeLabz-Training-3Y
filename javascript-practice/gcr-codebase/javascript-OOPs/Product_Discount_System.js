function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method abstracting discount logic
Product.prototype.applyDiscount = function (percent) {
  return this.price - (this.price * percent) / 100;
};

// Create 3 products
const laptop = new Product("Laptop", 60000);
const headphones = new Product("Headphones", 3000);
const keyboard = new Product("Mechanical Keyboard", 4500);

// Abstraction hides calculation details
console.log(`${laptop.name}: ${laptop.price} -> After 10%: ${laptop.applyDiscount(10)}`);
console.log(`${headphones.name}: ${headphones.price} -> After 25%: ${headphones.applyDiscount(25)}`);
console.log(`${keyboard.name}: ${keyboard.price} -> After 15%: ${keyboard.applyDiscount(15)}`);
