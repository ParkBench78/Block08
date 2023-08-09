// block14 Loops & Arrays: Only_Odds
// Assign inputArray & establish an empty outputArray;
const inputArray = [2, 4, 6, 8, 10, 11, 12];
const outputArray = [];
// Find all odd numbers from inputArray by dividing each element by 2;
// If there is a remainder of one, add that odd number into the outputArray;
for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i] % 2 === 1){
    outputArray.push(inputArray[i]);
  }
}
// Print outputArray.
console.log(outputArray);


