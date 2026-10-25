// Shopping Cart Total
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  applyCoupon(coupon) {
    const match = /^(SAVE|DISC)(\d+)$/.exec(coupon.trim().toUpperCase());
    if (!match) return { valid: false, discount: 0, total: this.getTotal() };

    const percent = Number(match[2]);
    if (percent <= 0 || percent > 100) {
      return { valid: false, discount: 0, total: this.getTotal() };
    }

    const subtotal = this.getTotal();
    const discount = subtotal * percent / 100;

    return {
      valid: true,
      discount,
      total: subtotal - discount
    };
  }
}

const cart = new Cart();
cart.addItem("Laptop", 55000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);

const coupon = prompt("Enter coupon (e.g. SAVE20 or DISC10):");
if (coupon !== null) {
  const result = cart.applyCoupon(coupon);
  if (result.valid) {
    console.log(`Discount: ₹${result.discount.toFixed(2)}`);
    console.log(`Final Total: ₹${result.total.toFixed(2)}`);
  } else {
    console.log("Invalid coupon.");
  }
}
