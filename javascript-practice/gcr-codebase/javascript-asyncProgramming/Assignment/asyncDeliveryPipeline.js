// Q10
function deliveryStep(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.1 ? reject(new Error("Step failed")) : resolve(message);
        }, Math.floor(Math.random() * 1001) + 1000);
    });
}
async function runPipeline() {
    try {
        console.log("Start Pipeline");
        console.log(await deliveryStep("Step 1: Order taken"));
        console.log(await deliveryStep("Step 2: Food prepared"));
        console.log(await deliveryStep("Step 3: Package ready"));
        console.log(await deliveryStep("Step 4: Out for delivery"));
        console.log(await deliveryStep("Delivery completed!"));
    } catch {
        console.log("Pipeline failed!");
    }
}
runPipeline();
