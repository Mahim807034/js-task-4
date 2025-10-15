function sortAscending(arr) {
  return arr.slice().sort((a, b) => a - b);
}
const numbers = [3, 1, 4, 2];
const sortedNumbers = sortAscending(numbers);
console.log("Sorted Array:", sortedNumbers);
