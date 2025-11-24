// console.log("Welcome to JavaScript classes!");
// console.log("Welcome to JavaScript classes!");
// console.log("Welcome to JavaScript classes!");
// console.log("Welcome to JavaScript classes!");
// console.log("Welcome to JavaScript classes!");

/* Loops: A repetitional cycle.
    There are many ways to implement loops such as:
    1. while loop
    2. do while loop
    3. for loop
    There are other special loops specially made for Arrays and object.
    1. For of loop
    2. For in loop
    3. Foreach loop
*/

/* 
While loop syntax:
let i = 0;  // Initialization for iteration
while(<condition>) {
  // Statements that we want to execute in a loop;
  // Increment or decrement
}
*/

/* Objective: To print a message 5 times. */
// let i = 0;
// while(i < 5) {
//   console.log("Welcome to JavaScript classes!");
//   i++;
// }

let value = +prompt("Enter a number to print it's square. 0 to quit!", 0);

while (value > 0) {
  if (value == 404) {
    break;
  }
  value = +prompt("Enter a number to print it's square. 0 to quit!", 0);
  if (value == 25 || value < 0) {
    value = 0;
    continue;
  }
  console.log(value, "square is:", value ** 2);
}
