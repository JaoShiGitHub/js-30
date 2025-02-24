// 2. Sum of Digits in a Number
//Write a function that takes a number and returns the sum of its digits.

function sumOfDigits(num) {
  // Your code here
  const nums = `${num}`;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += Number(nums[i]);
  }
  return count;
}

console.log(sumOfDigits(123)); // Expected output: 6
console.log(sumOfDigits(987)); // Expected output: 24

function sumOfDigits2(num) {
  // Your code here
  const nums = `${num}`.split("").map((n) => Number(n));
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfDigits2(123)); // Expected output: 6
console.log(sumOfDigits2(987)); // Expected output: 24

// 3. Count Occurrences of a Character in a String
// Write a function that counts how many times a character appears in a string.

function countOccurrences(str, char) {
  // Your code here
  let count = 0;
  for (let alpha of str) {
    if (alpha === char) {
      count += 1;
    }
  }
  return count;
}

console.log(countOccurrences("hello", "l")); // Expected output: 2
console.log(countOccurrences("world", "o")); // Expected output: 1
