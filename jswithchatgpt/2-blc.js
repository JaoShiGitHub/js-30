// 1. Find the Smallest Number
// Write a function that takes three numbers and returns the smallest one.

function findMin(a, b, c) {
  const n = a <= b ? a : b;
  return n < c ? n : c;
}

console.log(findMin(5, 2, 8)); // Expected output: 2
console.log(findMin(12, 7, 7)); // Expected output: 7

// 2. Multiply All Numbers in an Array
// Write a function that takes an array of numbers and returns the product of all numbers.

function multiplyArray(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

console.log(multiplyArray([2, 3, 4])); // Expected output: 24
console.log(multiplyArray([1, 5, 7])); // Expected output: 35


// 3. Count Vowels in a String
// Write a function that counts how many vowels are in a string. (Vowels are: a, e, i, o, u)

function countVowels(str) {
  let result = "";
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    for (let v = 0; v < vowels.length; v++) {
      if (str[i] === vowels[v]) {
        result += str[i];
      }
    }
  }

  return result.length;
}

console.log(countVowels("hello")); // Expected output: 2
console.log(countVowels("javascript")); // Expected output: 3


// 4. Palindrome Check
// Write a function that checks if a word is a palindrome (a word that reads the same backward as forward). Return true or false.

function isPalindrome(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result === str;
}

console.log(isPalindrome("madam")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false

// 5. FizzBuzz
// Write a function that prints numbers from 1 to n. But:

// For multiples of 3, print "Fizz".
// For multiples of 5, print "Buzz".
// For multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(n) {
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
// Expected output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
