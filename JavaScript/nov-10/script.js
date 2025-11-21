// let value = +prompt("Enter a number to print it's square. 0 to quit!", 0);
// let value;

// do {
//   value = +prompt("Enter a number to print it's square. 0 to quit!", 0);
//   if (value == 404 || value == 0) {
//     break;
//   }
//   if (value == 25 || value < 0) {
//     value = 1;
//     continue;
//   }
//   console.log(value, "square is:", value ** 2);
// } while (value > 0);

/* A program to print even number */

// let num = 0;
// while(num <= 20) {
//   if (num % 2 == 0) {
//     console.log(num);
//   }
//   num++;
// }

/* Program to print the sum of n contiguous number */
// let sum = 0,
//   num = 0;
// while (num < 10) {
//   num++;
//   sum = sum + num;
// }
// console.log(sum);

let n = 5;

let sum = (n * (n+1))/2;
console.log(sum);


/*
HomeWork:
1. Write a program to print number from 1 to 100 using while and do-while loop separately;
2. Write a program to print the table of a number;
3. Write a program to print sum of n contiguous number using while and do-while loop separately;
4. Write a program to print the factorial of a number;
5. Write a program to print divisible of a number from 0 to 100 inclusively;
*/