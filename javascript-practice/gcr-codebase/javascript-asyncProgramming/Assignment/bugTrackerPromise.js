// Q3
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error("API request failed"));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}
getBugs()
    .then(bugs => console.table(bugs))
    .catch(error => console.log(`Error: ${error.message}`));
