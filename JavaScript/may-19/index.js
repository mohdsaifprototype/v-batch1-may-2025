/* console.log("Variables and It's Data Type in JavaScript"); */

/* 
Variable is an empty container that is used to store values.
In JavaScript variables are loosely typed, means you can create a container and store any type of value.

Data type:
age = 26           - Integer
PI = 3.14          - Float (Decimal values aka fractional values)
Grade = 'C'        - Char (A single Character)
name = "Donald Trump" - String
isEligibleToVote = true | false aka 1 | 0       - Boolean

Note: In most programming language array is a collection of multiple values of same Data Type
StudentMarks = [89, 95, 78, 80, 60]
Employees = ["Alex", "Eliot", "John", "Anne", "Robert"]

Homogenous: same types
Heterogenous: different types
*/

// myVariable = 1;
// console.log("The value of myVariable is", myVariable);

// myVariable = "John Doe";
// console.log("The value of myVariable is", myVariable);

/* 
To declare a variable in JavaScript we use one of the following keywords:
1. var: an old school method to declare variables.
  Benefits of var:
  * Redeclaration allowed
  * Part of Global Scope
2. let: It was introduced in ES6 module (modern JS)
  Benefits of let
  * Redeclaration denied
  * Part of local scope 
3. const: It was introduced in ES6 module and It prevents the variable from redefining values
  * Redeclaration denied
  * Part of local scope
  * Redefinition denied 
*/

// var country = "India";
// console.log("The name of the country is:", country); 

// var country = "China";
// console.log("The name of the country is:", country); 

// let city = "New Delhi";     // Declaration
// console.log("The name of the city is:", city);

// city = "Varanasi";          // Redefine
// console.log("The name of the city is:", city);

// const gravitationalAcceleration = 10;

// console.log("The value obtained for gravitational Acceleration is:", gravitationalAcceleration);

// // gravitationalAcceleration = 9.8;    // Will trough TypeError
// // console.log("The value obtained for gravitational Acceleration is:", gravitationalAcceleration);


/* --------------- Data type in JavaScript --------------- */


// let myNumber = 123456789123456456546546546n;
// console.log("Output: ", myNumber);

/* String */
// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;    // Template literal or String template

// console.log("The value of str is:", str);
// console.log("The value of str2 is:", str2);
// console.log("The value of phrase is:", phrase);

/* Undefined */
// let aVariable;
// console.log("The value of aVariable is:", aVariable);

console.log(typeof ["my", 2]);