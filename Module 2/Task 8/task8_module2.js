//Task 8
'use strict';
const task8 = document.querySelector('#task8');
function concat(arr){
  let result ="";
  for (let i = 0; i < arr.length; i ++) {
    result += arr[i];
  }
  return result;
}

let myArray = ["Ron","Harry","Hermione"]
task8.innerHTML = `The string is: ${concat(myArray)}.`;