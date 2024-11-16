
//Task 5
'use strict';
const task5 = document.querySelector('#task5');
function checkLeapYear(year) {
  if((year%4 === 0) && (year%100 !==0) | (year%400===0)){
    task5.innerHTML =`The year ${year} is a leap year`;
  }
  else{
    task5.innerHTML =`The year ${year} is not a leap year!`;
  }
}
const year = parseInt(prompt("Enter a year: "))
checkLeapYear(year)
