/* 
→ Explain events and event handling 
→ Explain jQuery
*/

// function changeColor() {
//   container.style.backgroundColor = "#abc";
// }

// container.onmouseenter = function () {
//   document.body.style.backgroundColor = '#abc';
// }

/* 
  Syntax for event handler
  element.addEventListener(event, handler, [options]);
*/

const myElement = document.querySelector("#container");
// console.log(myElement);

let red = 255,
  blue = 255,
  green = 255;
let number = 0;
function handlerFunction(event) {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  console.log(event);
  number++;
  console.log(number);
  if (number > 10) {
    myElement.removeEventListener("click", handlerFunction);
  }
}
myElement.addEventListener("click", handlerFunction);
