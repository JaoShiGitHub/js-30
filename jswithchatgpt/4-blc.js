// 1. Find the Second Largest Number
// Write a function that finds the second largest number in an array.

function secondLargest(arr) {
  let fsNum = 0;
  let secNum = 0;

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n > fsNum) {
      secNum = fsNum;
      fsNum = n;
    }
  }
  return secNum;
}

console.log(secondLargest([10, 20, 30, 40])); // Expected output: 30
console.log(secondLargest([5, 3, 9, 1])); // Expected output: 5


// 3. Find the Longest Word in a Sentence
// Write a function that returns the longest word in a sentence.

function longestWord(sentence) {
  // Your code here
  let result = sentence[0];

  for (let i = 0; i < sentence.length; i++) {
    if (result.length < sentence[i].length) {
      result = sentence[i];
    }
  }
  return result;
}

console.log(longestWord("I love programming")); // Expected output: "programming"
console.log(longestWord("JavaScript is fun"));
