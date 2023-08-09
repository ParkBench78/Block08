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


