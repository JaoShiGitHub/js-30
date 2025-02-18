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

  return words;
}

console.log(countWords("Hello world")); // Expected output: 2
console.log(countWords("This is a simple sentence")); // Expected output: 5
