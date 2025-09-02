//Array in java Script
console.log("This is a simple JavaScript file.");
let arr= [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]
//array are mutable
arr[0] = 10; // Changing the first element
console.log(arr); // Output: [10, 2, 3, 4,



//propwrties and methods of array
console.log(arr.length); // Output: 5 (length of the array)
console.log(arr.push(6)); // Output: 6 (adds 6 to the end
console.log(arr.pop()); // Output: 6 (removes the last element)
console.log(arr.shift()); // Output: 10 (removes the first element)
console.log(arr.unshift(0)); // Output: 5 (adds 0 to the beginning)
console.log(arr); // Output: [0, 2, 3, 4, 5]
console.log(arr.indexOf(3)); // Output: 2 (index of the first occurrence of 3)
console.log(arr.includes(4)); // Output: true (checks if 4 is in the array)
console.log(arr.slice(1, 3)); // Output: [2, 3] // Extracts elements from index 1 to 2
console.log(arr.join(", ")); // Output: "0, 2, 3, 4, 5" (joins elements into a string)  
console.log(arr.reverse()); // Output: [5, 4, 3, 2, 0] (reverses the array)
console.log(arr.sort()); // Output: [0, 2, 3, 4, 5] (sorts the array in ascending order)
console.log(arr.map(x => x * 2)); // Output: [0, 4, 6, 8, 10] (multiplies each element by 2)
console.log(arr.filter(x => x > 2)); // Output: [3, 4, 5] (filters elements greater than 2)
