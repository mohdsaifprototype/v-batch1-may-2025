/* 
Program: To print even number from 0 to 20 inclusively.
*/

for(let i = 0; i <= 10; i++) {
  if(i % 2 == 1) {
    continue;
  }
  console.log(i);
  if (i == 6) {
    break;
  }
}