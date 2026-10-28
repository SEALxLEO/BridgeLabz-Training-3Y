// Q1
function showEndMessage() {
    console.log("Welcome to the course!");
}
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}
greetUser("Devang", showEndMessage);
