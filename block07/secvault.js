/*
Pseudocode: Generate three numbers for a combination;
(1) Use three different arithmetic operators to generate each of the three numbers & assign each to a different variable;
(2) First number will be the solution for 4 + 6 = 10;
(3) Second number will be the solution for 5 * 8 = 40;
(4) Third number will be the solution for 42 - 3 = 39;
(5) Assign message to a variable as a string;
(6) Then display message and three-number combination;
*/
//Created a message string for the user;
const message = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:';
//Assigning arithmetic operators to three variables as per above Pseudocode;
let num1 = 4 + 6;
//Expect num1 to be 10;
let num2 = 5 * 8;
//Expect num2 to be 40;
let num3 = 42 - 3;
//Expect num3 to be 39;
alert(message + ' ' + num1 + '-'+ num2 + '-' + num3);
//Message will be displayed.;
