// Block13 If/Else Workshop;
// IS TRUTHY;
//Assign the variable.
let inputValue = 0;
// Evaluate what type of input is variable assigned by first checking if it's a string variable;
if (typeof inputValue == "string" && inputValue === "") {
  // If it's a string variable & it's an empty string, return falsey;
  console.log("The empty string is falsy (the only falsy string)");
} else if (typeof inputValue === "string") {
  // if it's a string but not an empty string, return true;
  console.log(true);
  // If it's not a string, check if it's a false beelean value;
} else if (inputValue === false) {
  // If it is, return falsy;
  console.log("The boolean value false is falsy");
  // check if it's null;
} else if (inputValue === null) {
  // If it's null, return falsy
  console.log("The null value is falsy");
  // Is it undefined? if yes, return falsy;
} else if (inputValue === undefined) {
  console.log("undefined is falsy");
  // Evaluate if it's 0, if is, return falsy.
} else if (inputValue === 0) {
  console.log("The number 0 is a falsy");
}

// NUMBER LINE;
//Assign the variable.
let num1 = -5;
let num2 = 0;
let sum = num1 + num2;
// Evaluate the sum of the input according to the requirement stated in the if staements and print the corresponding response;
if (sum > 100) {
  console.log(sum + " is greater than 100");
} else if (sum > 0) {
  console.log(sum + " is greater than 0");
} else if (sum === 0) {
  console.log(sum + " is equal to 0");
} else {
  console.log(sum + " is a negative number");
}

// >= FIVE;
//Assign the variable;
let num3 = 5;
let num4 = 5;
// Evaluate if both variables are greater than or equal to 5. If yes, return true;
if (num3 >= 5 && num4 >= 5) {
  console.log("true");
  // Otherwise, return false;
} else {
  console.log("false");
}

// PAIR & COMPARE;
//Assign the variable;
let param1A = "cake";
let param1B = "cake";
let param2A = "pie";
let param2B = "pie";
// Evaluate if either set of variables are the same in value & type. If yes, return true;
if (param1A === param1B || param2A === param2B) {
  console.log("true");
  // otherwise, return false;
} else {
  console.log("false");
}
