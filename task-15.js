function findFirstEven(arr) {
  return arr.find(num => num % 2 === 0);
}
const numbers = [1, 3, 7, 8, 10];
const firstEven = findFirstEven(numbers);
console.log("First Even Number:", firstEven);
