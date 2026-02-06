//callback in the javascripts

// A callback function in JavaScript is a function passed as an argument to another function. 
// This allows the receiving function, often called a higher-order function, to execute the callback function at a specific point during its operation,
//  typically after a particular task is completed. 

// That's the entire concept.




// function greet() {
//     console.log("Hello");
// }

// function met() {
//     console.log("I am going to meet");
// }

// // Normal function anology

// greet();
// met();

// // try to call 
// met(greet());


// In this case, the greet function is passed as an argument to the met function. 
// However, since the met function does not have any logic to execute the callback, 
// it will not call the greet function.


//now 

function greet() {
    console.log("Hello");
}

function met(callback) {
    console.log("I am going to meet");
    callback(); // Execute the callback function
}


//  callback function anology 
met(greet);







// explain the descriptions

// function greet() {
//     console.log("Hello");
// }

// function met(callback) {
//     console.log("I am going to meet");
//     callback(); // Execute the callback function

//     // code aur hota annd mujhe excute karna hai
//     console.log("Finsihed meeting, now I am going to work");
// }


// //  callback function anology 
// met(greet);

