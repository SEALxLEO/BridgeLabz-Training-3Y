const menu = [
  { item: "Burger", price: 120 },
  { item: "Pizza", price: 250 },
  { item: "Pasta", price: 180 },
  { item: "Coffee", price: 90 }
];

function calculateBill(orderItems) {
  try {
    // Map items to prices
    const prices = orderItems.map((orderName) => {
      const found = menu.find(
        (m) => m.item.toLowerCase() === orderName.toLowerCase()
      );
      if (!found) {
        throw new Error(`Invalid item: "${orderName}" is not on the menu.`);
      }
      return found.price;
    });

    // Total via reduce
    const total = prices.reduce((sum, price) => sum + price, 0);
    console.log(`Order: [${orderItems.join(", ")}] -> Total: Rs. ${total}`);
    return total;
  } catch (error) {
    console.error(`Order Error: ${error.message}`);
    return null;
  }
}

calculateBill(["Burger", "Pizza", "Coffee"]);
calculateBill(["Burger", "Sushi"]);
