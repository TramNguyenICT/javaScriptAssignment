function financial(x){
  return Number.parseFloat(x).toFixed(2);
}

//Task 10
'use strict';
const task10 = document.querySelector('#task10');
const diceNumber2 = parseInt(prompt("How many dices do you want to roll?"))
const sumOfUser = parseInt(prompt("What sum of eye numbers do you think it will be?"))

function diceSumCalculate(numberOfDice){
  let diceSum2 = 0
  let diceValue2
  for (let i =1; i <= numberOfDice; i++){
    diceValue2 = Math.ceil((Math.random()*6));
    diceSum2 = diceSum2 + diceValue2;
  }
  return diceSum2
}
let successTimes = 0
for (let j = 0; j< 10000; j++){
  const sumResult = diceSumCalculate(diceNumber2);
  if (sumResult === sumOfUser){
    successTimes ++;
  }
}
console.log(successTimes)
let successProbability = financial((successTimes/10000)*100)
console.log(successProbability)
task10.innerHTML = `Probability to get sum ${sumOfUser} with ${diceNumber2} is ${successProbability}%.`
