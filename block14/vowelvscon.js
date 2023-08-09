// block14 Loops & Arrays: Vowels vs Consonants;
// Zero variables;
let vowelCount = 0;
let consonantCount = 0;
// Assign inputString;
const inputString = "textbook";
// Assign vowelArray;
const vowelArray = ["a", "e", "i", "o", "u"]
// Compare each letter in the string with each item in the array & increase vowelCount by one;
for (let i = 0; i < inputString.length; i++) {  
  for (let u = 0; u < 5; u++) {
    if (inputString[i] === vowelArray[u]) {
      vowelCount++; 
    }   
  }
  // Calculate consonantCount by subtracting the legth of the sting by the total number of vowels found;
  consonantCount = inputString.length  - vowelCount;   
}
// Print results.
console.log(inputString + " has " + consonantCount + " consonants and " + vowelCount + " vowels");