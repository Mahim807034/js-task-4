function findGreaterThanTen(arr) {
  return arr.filter(num => num > 10);
}
const numbers = [5, 12, 18, 3];
const greaterThanTen = findGreaterThanTen(numbers);
console.log("Numbers Greater Than 10:", greaterThanTen);
