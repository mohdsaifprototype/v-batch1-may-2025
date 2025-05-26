/* → Explain escape sequences and built in functions in JavaScript */

// console.log("Hi there!aThis line will be printed in a new line");

// console.log('Famous quote:\n"Better late than never!"');

// console.log("You must have a \u0022credit card\u0022, if you want to shop on the 'Internet'.");

/* 
  Built-in function: A function that's been predefined and exist withing a programming language without the need of user declaration.

  Q. What's a function?
  A. A function is a set of instruction that perform certain tasks and we can use a function as many times as we want.

  There are many built in functions in JavaScript some of which are also called JavaScrip methods instead of function.

  functionName(arguments);
  e.g.,
  alert(<any>);
  prompt(<any>, defaultValue);


  console.log();
*/

/* JavaScript Object */
// let student = {
//   id: 1,
//   name: "Alex",
//   age: 23,
//   height: 5.4,
//   title: "Mr.",
//   description: "Know for his popularity",
// };

// console.log(student);
// console.clear();
// console.table(student);

/* 
  Math is a predefined class in JavaScript.

  Q. What is a class in JavaScript?
  A. A class is a combination of data know as properties and function know as method.

  Q. What is an object?
  A. An instance of a class.
*/

/* We can use it for multiple use case such as rounding off */
let a = 5.01;
let b = 9;
console.log("The value is:", a);
console.log("The value is:", Math.round(a));
console.log("The value is:", Math.ceil(a));
console.log("The value is:", Math.floor(a));
console.log("The value of PI is:", Math.PI);

console.log(`Square root of ${b} is:`, Math.sqrt(b));
console.log(`${b} raised to the power 2 is:`, b ** 2);
console.log(`${b} raised to the power 2 is:`, Math.pow(b, 2));

/* 
  TASK: Research for at least 10 more built in function in JavaScript with example and definition. 
*/
