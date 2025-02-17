// 1. Find the Smallest Number
// Write a function that takes three numbers and returns the smallest one.

function findMin(a, b, c) {
  // Your code here
  const n = a <= b ? a : b;
  return n < c ? n : c;
}

console.log(findMin(5, 2, 8)); // Expected output: 2
console.log(findMin(12, 7, 7)); // Expected output: 7
