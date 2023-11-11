export function executeCallback(callback, taskText) {
    callback(taskText);
}

export function myCallback(taskText) {
    console.log(`Task: ${taskText}`);
}
