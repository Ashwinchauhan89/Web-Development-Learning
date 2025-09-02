//Asynchronous in the javascript world is the way to handle operations that take time to complete, such as network requests or file I/O.

//In this example, we will use a simple asynchronous function that simulates a delay using setTimeout.

console.log("Starting asynchronous operation...");



setTimeout(() => {
    console.log("Operation completed after 2 seconds");
}, 2000);

console.log("Asynchronous operation started, waiting for completion...");
