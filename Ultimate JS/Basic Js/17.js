// How The JavaScripts Code Runs


// / Execution Context

//jab bhi code execution context create hot hai
//1 phaese memory allocate hoti hai
//2 phaese code execute hota hai



// 1 phase
// Memory allocation

// a = 10
// b = 20
// addNumber = fnCode
// sumResult1 = undefined
// sumeResult2 = undefined

// Execution phase


// console.log(a);
// var a = 10;
// var b = 20;
// // console.log(a);

// // var sumResult1 = addNumber(a,b);
// console.log(sumResult1);

// function addNumber(num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// // var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);
// // console.log(sumResult1,sumResult2);



// let const
// Memory allocation
// a = 10
// b = 20
// result = <uninitialised> (Temporal dead zone)
// addNumber = <uninitialised> (Temporal dead zone)

// Execution phase



let a = 10;
const b = 20;


const result = addNumber(a,b);
console.log(result);

const addNumber = function(num1,num2){
    const sum = num1+num2;
    return sum;
}