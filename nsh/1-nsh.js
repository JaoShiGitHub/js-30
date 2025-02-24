// 4. Find the Smallest Positive Integer in an Array
// Write a function that returns the smallest positive integer greater than 0 in an array.
// If there are no positive integers, return -1.

function findSmallestPositive(arr) {
    let result = Infinity;  // Start with a very large number (Infinity)
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] < result) {
        result = arr[i];  // Update result if a smaller positive number is found
      }
    }
  
    // If result is still Infinity, return -1 (no positive number found)
    return result === Infinity ? -1 : result;
  }
  
  console.log(findSmallestPositive([1, -2, 3, 0])); // Expected output: 1
  console.log(findSmallestPositive([-1, -2, -3]));  // Expected output: -1
  console.log(findSmallestPositive([0, 2, 4]));     // Expected output: 2
  console.log(findSmallestPositive([5, 0, -3]));    // Expected output: 5

// need some help
