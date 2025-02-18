// 1. Find the Factorial of a Number
// Write a function that takes a number and returns its factorial.
// (Factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120)

function factorial(n) {
  // Your code here
  let i = n;
  let result = 1;

  while (i > 0) {
    result *= i;
    i--;
  }
  return result;
}

console.log(factorial(5)); // Expected output: 120
console.log(factorial(7)); // Expected output: 5040


// 2. Find the Largest Number in an Array
// Write a function that takes an array and returns the largest number.

function findLargest(arr) {
  // Your code here
  let curr = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > curr) {
      curr = arr[i];
    }
  }
  return curr;
}

console.log(findLargest([10, 5, 20, 8])); // Expected output: 20
console.log(findLargest([100, 200, 150])); // Expected output: 200


// 3. Find the Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

function sumArray(arr) {
  // Your code here
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Expected output: 15
console.log(sumArray([10, -2, 7])); // Expected output: 15
