function convertNamesToUppercase(arr) {
  return arr.map(name => name.toUpperCase());
}
const names = ["sabbir", "rakib", "tamim"];
const uppercaseNames = convertNamesToUppercase(names);
console.log("Uppercase Names:", uppercaseNames);
