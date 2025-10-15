function filterStrings(arr) {
  return arr.filter(item => typeof item === 'string');
}
const mixedArray = [1, "apple", true, "banana"];
const stringsOnly = filterStrings(mixedArray);
console.log("String Elements:", stringsOnly);
