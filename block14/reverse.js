// block14 Loops & Arrays: Reverse
// Assign inputArray & establish an empty outputArray;
const inputArray = [1, -1, 2, -3, 5, -8, 13];
const outputArray = [];
// Read array in reverse order by starting at index that is one less than length;

for (let i = inputArray.length - 1; i > -1; i--) {
//  Add the number to the end of outputArray;
    outputArray.push(inputArray[i]);
  }
// Print outputArray.
console.log(outputArray);
