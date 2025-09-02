//callback function is function is the function that is called when the
//asynchronous operation is completed. It is passed as an argument to the
//asynchronous function and is executed once the operation is done.



console.log("Starting asynchronous operation...");



setTimeout(() => {
    console.log("Operation completed after 2 seconds");
}, 2000);

console.log("Asynchronous operation started, waiting for completion...");


const callbackFunction = (message) => {
    console.log(message);
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Script loaded successfully");
}
