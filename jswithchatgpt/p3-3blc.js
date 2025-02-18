// 2. Find the Largest Number in an Array
// Write a function that takes an array and returns the largest number.
// --Try with for...of loop
function findLargest(arr) {
  let curr = arr[0];
  for (let n of arr) {
    if (curr < n) curr = n;
  }
  return curr;
}

console.log(findLargest([10, 5, 20, 8])); // Expected output: 20
console.log(findLargest([100, 200, 150])); // Expected output: 200

// 4. Count Words in a Sentence
// Write a function that counts how many words are in a sentence.

function countWords(sentence) {
  let words = [];
  let word = "";

  for (let char of sentence) {
    if (char !== " ") {
      word += char;
    } else if (word) {
      words.push(word);
      word = "";
    }
  }

  if (word) words.push(word);

  return words.length;
}

console.log(countWords("Hello world")); // Expected output: 2
console.log(countWords("This is a simple sentence")); // Expected output: 5
