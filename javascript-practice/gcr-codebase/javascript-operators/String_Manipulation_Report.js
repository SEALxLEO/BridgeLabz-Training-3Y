// Q2: String Manipulation Report

let productName = " wireless headphones PRO ";

let cleanedTitle = productName
    .trim()
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Length: ${cleanedTitle.length}`);
