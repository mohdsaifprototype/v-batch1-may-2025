/* 
  Write a program to print a weekday
  0 => Sunday
  1 => Monday
  2 => Tuesday
  3 => Wednesday
  4 => Thursday
  5 => Friday
  6 => Saturday
*/

// let weekNum = +prompt("Enter the weekday number:", 0);

// if (weekNum === 0) {
//   console.log("Sunday");
// } else if (weekNum === 1) {
//   console.log("Monday");
// } else if (weekNum === 2) {
//   console.log("Tuesday");
// } else if (weekNum === 3) {
//   console.log("Wednesday");
// } else if (weekNum === 4) {
//   console.log("Thursday");
// } else if (weekNum === 5) {
//   console.log("Friday");
// } else if (weekNum === 6) {
//   console.log("Saturday");
// } else {
//   console.log("INVALID INPUT!");
// }

/* 
There is another way to work with conditional statement called switch statement, but we mostly use it when we know all the possible options or when we have limited choices.

Syntax:
switch(<choice>) {
case <opt1>:
  Statement;
  break;
case <opt2>:
  Statement;
  break;
  ...
default:
  Statement;
}
*/

let weekNum = +prompt("Enter the weekday number:", 0);

switch (weekNum) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid input!");
    break;
}
