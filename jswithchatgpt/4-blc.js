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
