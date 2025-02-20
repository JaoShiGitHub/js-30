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

// 4. Find Common Elements in Two Arrays
// Write a function that returns an array of common elements from two input arrays.

function commonElements(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

console.log(commonElements([1, 2, 3], [2, 3, 4])); // Expected output: [2, 3]
console.log(commonElements([5, 6, 7], [7, 8, 9])); // Expected output: [7]

// 5. Generate Fibonacci Sequence
// Write a function that returns the first n numbers of the Fibonacci sequence. (Fibonacci: 0, 1, 1, 2, 3, 5, 8...)

function fibonacci(n) {
  let arr = [0, 1];
  function generateFibonacci() {
    if (arr.length >= n) return arr;
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return generateFibonacci();
  }
  return generateFibonacci();
}

console.log(fibonacci(5)); // Expected output: [0, 1, 1, 2, 3]
console.log(fibonacci(7)); // Expected output: [0, 1, 1, 2, 3, 5, 8]
