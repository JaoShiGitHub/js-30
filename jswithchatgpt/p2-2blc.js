// 1. Find the Smallest Number
// Write a function that takes three numbers and returns the smallest one.

function findMin(a, b, c) {
  return a < b ? (a < c ? a : c) : (b < c ? b : c); // or Math.min(a, b, c)
}

console.log(findMin(5, 2, 8)); // Expected output: 2
console.log(findMin(12, 7, 7)); // Expected output: 7

// 3. Count Vowels in a String
// Write a function that counts how many vowels are in a string. (Vowels are: a, e, i, o, u)

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // Expected output: 2
console.log(countVowels("javascript")); // Expected output: 3
