function countEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0).length;
}
const numbers = [1, 2, 3, 4, 6];
const evenCount = countEvenNumbers(numbers);
console.log("Even Numbers Count:", evenCount);
