// Q7: Customer Feedback Processor

let feedback = "Great product! Fast delivery and amazing sound quality!";

let wordCount = feedback.trim().split(/\s+/).length;
let hasBad = feedback.toLowerCase().includes("bad");
let hasPoor = feedback.toLowerCase().includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasBad && !hasPoor) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
