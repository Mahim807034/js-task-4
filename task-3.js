function findSmallestNumber(arr) {
  return Math.min(...arr);
}
const numbers = [10, 5, 20];
const smallest = findSmallestNumber(numbers);
console.log("Smallest Number:", smallest);
