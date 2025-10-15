function countOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0).length;
}
const numbers = [1, 2, 3, 4, 6];
const oddCount = countOddNumbers(numbers);
console.log("Odd Numbers Count:", oddCount);
