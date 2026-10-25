// E-Commerce Product Manager
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price -= this.price * percent / 100;
  }

  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 800, "Accessories"),
  new Product(3, "Headphones", 1800, "Audio"),
  new Product(4, "Keyboard", 1500, "Accessories")
];

products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.getDetails()));

console.log("\nProducts above ₹1000:");
products
  .filter(product => product.price > 1000)
  .forEach(product => console.log(product.getDetails()));
