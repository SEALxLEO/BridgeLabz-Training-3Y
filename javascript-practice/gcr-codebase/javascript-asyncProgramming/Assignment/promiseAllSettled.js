// Q7
function loadProfile() {
    return new Promise((resolve, reject) =>
        setTimeout(() => Math.random() < 0.3 ? reject("Profile failed") : resolve("Profile Loaded"), 2000));
}
function loadPosts() {
    return new Promise((resolve, reject) =>
        setTimeout(() => Math.random() < 0.3 ? reject("Posts failed") : resolve("Posts Loaded"), 1500));
}
function loadMessages() {
    return new Promise((resolve, reject) =>
        setTimeout(() => Math.random() < 0.3 ? reject("Messages failed") : resolve("Messages Loaded"), 1000));
}

const startTime = Date.now();
Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(results => {
        results.forEach(result => {
            console.log(result.status === "fulfilled"
                ? `Success: ${result.value}`
                : `Failed: ${result.reason}`);
        });
        console.log(`Total time: ${Date.now() - startTime} ms`);
    });
