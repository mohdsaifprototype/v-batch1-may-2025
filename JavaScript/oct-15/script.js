// let a = prompt("Enter a number", 0);
// let b = prompt("Enter anoter number", 0);

// console.log("Type of a and b is:", typeof a, typeof b);
// // let c = Number(a) + Number(b);
// let c = +a + +b;

// console.log("Sum:", c);

/* 
There are 3 functions for explicit type casting.
1. Number(<param>)
2. Boolean(<param>)
3. String(<param>)
*/

// let x = 5;
// console.log("The value of x is:", x, "and it's type is:", typeof x);
// x = String(x);
// console.log("The value of x is:", x, "and it's type is:", typeof x);
// x = Boolean(x);
// console.log("The value of x is:", x, "and it's type is:", typeof x);
// x = Number(x);
// console.log("The value of x is:", x, "and it's type is:", typeof x);

/* -------------- Relational Operators -------------- */
/* 
Syntax for if else in JS.
if (<condition>) {
  stament to execute when condition of if is true. 
} else {
  stament to execute when condition of if is false.
} 
*/

/* Program to find the greatest of two numbers */
// let num1 = +prompt("Enter a number", 0);
// let num2 = +prompt("Enter another number", 0);

// let result = num1 > num2;
// if (result) {
//   console.log(num1, "is greater than", num2);
// } else {
//   console.log(num2, "is greater than", num1);
// }

/* Write a program to check if the number is even or odd */

let num = +prompt("Enter a number!", 0);

// if (num % 2 === 0) {
//   console.log(num, "is an even number!");
// } else if (num % 2 === 1 || num % 2 === -1) {
//   console.log(num, "is an odd number!");
// } else {
//   console.log("INVALID NUMBER!");
// }

if (num % 2 === 0) {
  console.log(num, "is an even number!");
} else if (Math.abs(num % 2) === 1) {
  console.log(num, "is an odd number!");
} else {
  console.log("INVALID NUMBER!");
}
