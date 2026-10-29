// Q1
function wait(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.1 ? reject(new Error("Step failed")) : resolve(message);
        }, Math.floor(Math.random() * 1001) + 1000);
    });
}
function boilWater() { return wait("Water boiled"); }
function brewCoffee() { return wait("Coffee brewed"); }
function pourCoffee() { return wait("Coffee poured"); }

boilWater()
    .then(message => { console.log(message); return brewCoffee(); })
    .then(message => { console.log(message); return pourCoffee(); })
    .then(message => {
        console.log(message);
        console.log("Coffee ready for the team!");
    })
    .catch(error => console.log(`Error: ${error.message}`));
