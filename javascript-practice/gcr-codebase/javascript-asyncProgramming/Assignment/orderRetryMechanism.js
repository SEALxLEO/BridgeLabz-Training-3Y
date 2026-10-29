// Q8
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => Math.random() < 0.5
            ? resolve("Success")
            : reject(new Error("Failed")), 500);
    });
}
async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return;
        } catch {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}
processOrder().catch(error => console.log(error.message));
