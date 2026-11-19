const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 800, stock: 3 },
  { id: 2, name: "Cotton T-Shirt", category: "Apparel", price: 500, stock: 25 },
  { id: 3, name: "USB-C Hub", category: "Electronics", price: 1500, stock: 4 },
  { id: 4, name: "Running Shoes", category: "Footwear", price: 2400, stock: 12 },
  { id: 5, name: "Denim Jeans", category: "Apparel", price: 1800, stock: 2 }
];

// 1. Filter low stock (< 5)
function getLowStockProducts(items, threshold = 5) {
  return items.filter((item) => item.stock < threshold);
}

// 2. Sort ascending by price
function sortProductsByPrice(items) {
  return [...items].sort((a, b) => a.price - b.price);
}

// 3. Total stock value via reduce
function calculateTotalInventoryValue(items) {
  return items.reduce((total, item) => total + item.price * item.stock, 0);
}

// 4. Group by category via reduce
function groupByCategory(items) {
  return items.reduce((groups, item) => {
    (groups[item.category] ||= []).push(item);
    return groups;
  }, {});
}

console.log("Low Stock:", getLowStockProducts(products));
console.log("Sorted By Price:", sortProductsByPrice(products));
console.log("Total Inventory Value: Rs.", calculateTotalInventoryValue(products));
console.log("Grouped By Category:", groupByCategory(products));
