// 1. Find the Smallest Number
// Write a function that takes three numbers and returns the smallest one.

function findMin(a, b, c) {
  // Your code here
  const n = a <= b ? a : b;
  return n < c ? n : c;
}

console.log(findMin(5, 2, 8)); // Expected output: 2
console.log(findMin(12, 7, 7)); // Expected output: 7

// 2. Multiply All Numbers in an Array
// Write a function that takes an array of numbers and returns the product of all numbers.

function multiplyArray(arr) {
  // Your code here
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

console.log(multiplyArray([2, 3, 4])); // Expected output: 24
console.log(multiplyArray([1, 5, 7])); // Expected output: 35
