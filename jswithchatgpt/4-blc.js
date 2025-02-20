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

// 2. Check if a Number is Prime
// Write a function that returns true if a number is prime and false otherwise.
// (A prime number is only divisible by 1 and itself)

function isPrime(num) {
  return !!(num % 2);
}

console.log(isPrime(5)); // Expected output: true
console.log(isPrime(10)); // Expected output: false

// 3. Find the Longest Word in a Sentence
// Write a function that returns the longest word in a sentence.

function longestWord(sentence) {
  let words = [];
  let word = "";
  let longestWord = "";
  for (let char of sentence) {
    if (char !== " ") {
      word += char;
    } else if (word) {
      words.push(word);
      word = "";
    }
  }

  if (word) words.push(word);

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(longestWord("I love programming")); // Expected output: "programming"
console.log(longestWord("JavaScript is fun")); // Expected output: "JavaScript"
