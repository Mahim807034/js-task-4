function totalWordLength(words) {
  return words.reduce((total, word) => total + word.length, 0);
}
const words = ["Hi", "JS", "World"];
const totalLength = totalWordLength(words);
console.log("Total Word Length:", totalLength);
