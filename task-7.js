function doubleEachNumber(arr) {
  return arr.map(num => num * 2);
}
const numbers = [2, 3, 4];
const doubled = doubleEachNumber(numbers);
console.log("Doubled Numbers:", doubled);
