function findIndexOfElement(arr, value) {
  return arr.indexOf(value);
}
const numbers = [10, 20, 30, 40];
const value = 30;
const index = findIndexOfElement(numbers, value);
console.log(`Index of ${value}:`, index);
