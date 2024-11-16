
//Task 4
'use strict';
const task4 = document.querySelector('#task4');
let studentName = prompt("What's your name?");
let houseIndex = Math.ceil((Math.random()*4));
console.log(houseIndex)
switch(houseIndex) {
  case 1:
    task4.innerHTML = `${studentName}, you are Gryffindor!`;
    break;
  case 2:
    task4.innerHTML = `${studentName}, you are Slytherin!`;
    break;
  case 3:
    task4.innerHTML = `${studentName}, you are Hufflepuff!`;
    break;
  default:
    task4.innerHTML = `${studentName}, you are Ravenclaw!`;
    break;
}
