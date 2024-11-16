function financial(x){
  return Number.parseFloat(x).toFixed(2);
}

//Task 6
'use strict';
const task6 = document.querySelector('#task6');
let userChoice = confirm("Should I calculate the square root?");
if (userChoice == true){
  let userNumber = parseInt(prompt("Give me a number to calcute: "))
  if (userNumber >= 0){
    result = Math.sqrt(userNumber)
    task6.innerHTML = `The square root of ${userNumber} is ${financial(result)}.`
  }
  else{
    task6.innerHTML = `The square root of a negative number is not defined.`
  }
}
else{
  task6.innerHTML = `The square root is not calculated.`
}
