// block14 Loops & Arrays: Only_Odds
// Assign inputArray & establish an empty outputArray;
const inputArray = [70, 42, 55, 81, 21, 91, 34];
const outputArray = [];
// Find all odd numbers from inputArray by dividing each element by 2;
// If there is a remainder of one, add that odd number into the outputArray;
for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i] % 2 === 1) {
    outputArray.push(inputArray[i]);
  }
}
// Print outputArray.
console.log(outputArray);

// block14 Loops & Arrays: Vowels vs Consonants;
// Zero variables;
let vowelCount = 0;
let consonantCount = 0;
// Assign inputString;
const inputString = "textbook";
// Assign vowelArray;
const vowelArray = ["a", "e", "i", "o", "u"];
// Compare each letter in the string with each item in the array & increase vowelCount by one;
for (let i = 0; i < inputString.length; i++) {
  for (let u = 0; u < 5; u++) {
    if (inputString[i] === vowelArray[u]) {
      vowelCount++;
    }
  }
  // Calculate consonantCount by subtracting the legth of the sting by the total number of vowels found;
  consonantCount = inputString.length - vowelCount;
}
// Print results.
console.log(inputString + " has " + consonantCount + " consonants and " + vowelCount + " vowels");

// block14 Loops & Arrays: Reverse
// Assign inputArray & establish an empty outputArray;
const forwardArray = [1, -1, 2, -3, 5, -8, 13];
const reversedArray = [];
// Read array in reverse order by starting at index that is one less than length;

for (let i = inputArray.length - 1; i > -1; i--) {
  //  Add the number to the end of outputArray;
  outputArray.push(inputArray[i]);
}
// Print outputArray.
console.log(outputArray);

// block14 Loops & Arrays: FizzBuzz
// Evaluate starting from 1 to 100;
for (let i = 1; i <= 100; i++) {
  // If i divided by 3 has no remainder and if i divided by 5 has no remainder, print FizzBuzz;
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    // If the remainder is only 0 for i divided by 3, then print Fizz;
  } else if (i % 3 == 0) {
    console.log("Fizz");
    // If the remainder is only 0 for i divided by 5, then print Buzz;
  } else if (i % 5 == 0) {
    console.log("Buzz");
    // If none of the "If" statements apply, then print i.
  } else {
    console.log(i);
  }
}
