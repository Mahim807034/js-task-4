function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const numbers = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = removeDuplicates(numbers);
console.log("Unique Values:", uniqueNumbers);
