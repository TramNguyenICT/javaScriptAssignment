//Task 7
'use strict';
const task7 = document.querySelector('#task7');
let diceNumber = parseInt(prompt("How many dice do you want to roll?"))
let diceSum = 0
let diceValue
for (let i =1; i <= diceNumber; i++){
  diceValue = Math.ceil((Math.random()*6));
  console.log("Dice "+i+": return "+diceValue)
  diceSum = diceSum + diceValue;
}
task7.innerHTML = `The sum of the results of the dice rolls is ${diceSum}.`
