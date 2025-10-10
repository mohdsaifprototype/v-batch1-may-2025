/* let a = 2;
let b = 3;
let c = 4; */
/* let a = 2,
  b = 3,
  c = 4; */
// console.log("The value of a is:", a);
// console.log("The value of b is:", b);
// console.log("The value of c is:", c);

/* 
  Problem: To check if a user is eligible to vote or not?
*/

// let age = 12;
// if (age >= 18) {
//   console.log("You are eligible to vote!");
// } else {
//   console.log("You are not eligible to vote!");
// }

/* 
Problem: a student should be promoted to next class only if the student score marks greater than 75 out of 100 in both subject a and b.
*/

/* let a = 80, b = 70;
if (a >= 75 && b >= 75) {
  console.log("You are promoted to next class!");
} */

/* 
Problem: write the below code using ternary operator.
let age = 12;
if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote!");
}

Hint: ternary operator syntax:
(condition) ? (true) : (false);
*/

// let age = 12;
// let message = (age >= 18) ? "You are eligible to vote!" : "You are not eligible to vote!";

// console.log(message);

/* Nullish coalescing operator */
function greetUser(name) {
  console.log(`Hello, ${name ?? "Guest"}!`);
}

greetUser(0);
greetUser();