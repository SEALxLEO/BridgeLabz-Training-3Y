// Q4
function serverResponse(name, seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject(new Error(`${name} failed`));
            else resolve(`${name} responded`);
        }, seconds * 1000);
    });
}
const serverA = serverResponse("Server A", 2);
const serverB = serverResponse("Server B", 3);

Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.log(`All servers error: ${error.message}`));

Promise.race([serverA, serverB])
    .then(result => console.log(`Fastest response: ${result}`))
    .catch(error => console.log(`Race error: ${error.message}`));
