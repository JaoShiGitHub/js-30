function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(3, 5)); // Expected output: 8
console.log(addNumbers(10, 20)); // Expected output: 30

function checkEvenOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

// modulus operator % :
// Use it to check if there is a remainder when the number is divided by 2
// If the remainder is 0, the number is even; otherwise, it's odd

console.log(checkEvenOdd(4)); // Expected output: "Even"
console.log(checkEvenOdd(7)); // Expected output: "Odd"

function findMax(a, b) {
  return a > b ? a : b;
}

console.log(findMax(10, 20)); // Expected output: 20
console.log(findMax(50, 25)); // Expected output: 50

function reverseString(str) {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
}

console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("JavaScript")); // Expected output: "tpircSavaJ"

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("apple")); // Expected output: 5
console.log(countCharacters("hello world")); // Expected output: 11
