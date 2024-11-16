//Task 9
'use strict';
const task9 = document.querySelector('#task9');
const primeNumberCheck = parseInt(prompt("Enter an integer to check if it is a prime number."))
let isPrimeNumber = true
for(let temp = 2; temp <primeNumberCheck; temp++){
  if (primeNumberCheck % temp === 0){
    isPrimeNumber = false;
  }
}
if ((isPrimeNumber == true)&&(primeNumberCheck >1)){
  task9.innerHTML = `Number ${primeNumberCheck} is a prime number.`
}
else{
  task9.innerHTML = `Number ${primeNumberCheck} is not a prime number.`
}
