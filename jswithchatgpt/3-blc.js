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
