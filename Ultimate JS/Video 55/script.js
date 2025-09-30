console.log("This is a simple JavaScript file.");

// var a =12;
// var b = 13;
// var c = a + b;
// console.log("The sum of a and b is: " + c);

// most let are used in JavaScript

// let x = 10;
// let y = 20; 
// let z = x + y;
// console.log("The sum of x and y is: " + z);



let a = 12;
let b = "Ashwin ";
let c = 5.55;
const d = true;

let e = null;
let f = undefined;

console.log("" + a + " " + b + " " + c + " " + d + " " + e + " " + f);
// console.log(a + b + c + d + e + f); // This will not work as expected because of type coercion

console.log("The type of a is: " + typeof a);   
console.log("The type of b is: " + typeof b);
console.log("The type of c is: " + typeof c);   
console.log("The type of d is: " + typeof d);
console.log("The type of e is: " + typeof e);   
console.log("The type of f is: " + typeof f);   
// This is a known bug in JavaScript, null is an object



let o ={
    name: "Ashwin",
    age: 20,
    isStudent: true,
    subjects: ["Math", "Science", "English"],
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
}
console.log("The type of o is: " + typeof o);
console.log("The value of o is: ", o);

