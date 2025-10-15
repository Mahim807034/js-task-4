function findLargestNumber(arr) {
  return Math.max(...arr);
}
const numbers = [10, 50, 20];
const largest = findLargestNumber(numbers);
console.log("Largest Number:", largest);
