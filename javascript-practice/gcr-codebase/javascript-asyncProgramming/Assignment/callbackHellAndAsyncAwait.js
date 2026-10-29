// Q5
function runStage(name, callback) {
    setTimeout(() => {
        console.log(name);
        callback();
    }, 1000);
}
function callbackPipeline() {
    runStage("Design", () => {
        runStage("Build", () => {
            runStage("Test", () => {
                runStage("Deploy", () => {
                    runStage("Celebrate", () => console.log("Done"));
                });
            });
        });
    });
}
function runStagePromise(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(name);
            resolve();
        }, 1000);
    });
}
async function asyncPipeline() {
    await runStagePromise("Design");
    await runStagePromise("Build");
    await runStagePromise("Test");
    await runStagePromise("Deploy");
    await runStagePromise("Celebrate");
    console.log("Done");
}
callbackPipeline();
// asyncPipeline();

// Async/await gives a cleaner top-to-bottom flow.
