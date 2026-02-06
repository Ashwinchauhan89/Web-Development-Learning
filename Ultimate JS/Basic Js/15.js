// function in the javscripts 


function greet() {
    console.log("Hello world");
}

//calling the functons
greet();

// functions is block of the code which are usee to perform the spectic taska.
// it maintain the resuability of the code.



//functions with arguments

function add(a,b) {
    return a+b;
}
console.log(add(5,10));  //arguments and parameters




console.log(greet()); //undefined because there is no return statement in the function greet. it only print the message but does not return any value. so when we try to log the result of greet() it will return undefined.



// function addNumber(num1,num2,num3=0,num4=0){
    
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

// greeting();
// addNumber(3,4);

//rest operators

// rest operator is used to pass the variable number of arguments to a function.
//  it is denoted by three dots (...). it is used to collect the remaining arguments into an array.

//
function greeting(...names){    
    console.log(names);
}

greeting("Ashwin","Rohit","Mohit","Suraj","Anjali");



// sum of the numbers using rest operator

function addNumber(...num){
   
    let sum=0;

    for(let n of num){
        sum+=n;
    }

    console.log(sum);
    
}


// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12)

// console.log(greeting());


// Rest Operator
// The rest operator is represented by three dots (...). 
// When used in a function's parameter list, it catches any extra arguments passed to the function and packs them neatly into an array. 
// This allows functions to handle varying numbers of arguments without explicitly defining them.
//  So, you can think of it as a way to gather up the remaining arguments into an array for easy handling inside the function.

// Example: The rest operator gathers all arguments passed to the function after the first one (10 in this case) into an array called rest.





//rest
const arr = [10,20,30,40,50];


//spread operator
const arr2 = [30,70,90,10]


//rest
const [first,second, ...num] = arr;
console.log(first,second, num);


//spread operator // spread operator is used to spread the elements of an array or object into individual elements. it is denoted by three dots (...). it is used to copy the elements of an array or object into another array or object.
// values ko spread karna 
const newArr = [...arr,...arr2];
console.log(newArr);




// function: expression
// function exprressions
// storting in to the variable
const sum = function add(a,b) {
    return a+b;
}

console.log(sum(324,67));





// Arrow functions
const greet1 = () => {
    console.log("This is an arrow function.");
}
greet1();


// arrow function with arguments
const addarrow =(a,b) => { 
    return a+b;
}
console.log(addarrow(5,10));

// return statemnet

const returnexample =(a,b) => a+b;  // implicit return
console.log(returnexample(5,10));

// if we have only single paramter , not need to use parenthesis
const square = num => num * num ;
console.log(square(5));


// arroow ko object ko return karwana hai

//method 1
const create =(name, age) =>{
    let obj = {
        name: name,
        age : age
    }
    return obj

}
console.log(create("Ashwin", 20));



//method 2
const create2 =(name, age) =>{
    return {
        name: name,
        age : age
    }
    

}
console.log(create2("Ashwin", 20));




//method 3
const create3 =()=>(
    {namee: "Ashwin", age: 20}
)
console.log(create3());
//object starting mein parenthesis lanana hai.



// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("This is an IIFE.");
})();
