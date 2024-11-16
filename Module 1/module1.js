function financial(x){
  return Number.parseFloat(x).toFixed(2);
}

//Task 1
console.log("I'm printing to console!");

//Task 2
'use strict';
const task2 = document.querySelector('#task2')

let username = prompt("Enter your username: ");
task2.innerHTML = `Hello, ${username}!`;

//Task 3
const task3 = document.querySelector('#task3');

let num1 = parseInt(prompt("Enter the 1st integer: "));
let num2 = parseInt(prompt("Enter the 2nd integer: "));
let num3 = parseInt(prompt("Enter the 3rd integer: "));
sum = num1 + num2 + num3;
product = num1*num2*num3;
average = sum/3;
console.log("num1: ",num1);
console.log("num2: ",num2);
console.log("num3: ",num3);
console.log("sum: ",sum);
console.log("product: ",product);
console.log("average: ",average);
task3.innerHTML = `The sum is ${sum}, the product is ${product}, the average is ${financial(average)}.`;

//Task 4
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

//Task 5
const task5 = document.querySelector('#task5');
function checkLeapYear(year) {
  if((year%4 === 0) && (year%100 !==0) | (year%400===0)){
    task5.innerHTML =`This year $year$ is a leap year`;
  }
  else{
    task5.innerHTML =`This year ${year} is not a leap year!`;
  }
}
year = parseInt(prompt("Enter a year: "))
checkLeapYear(year)

//Task 6
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
//Task 7
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

//Task 8
const task8 = document.querySelector('#task8');
let startYear = parseInt(prompt("Enter the start year: "));
let endYear = parseInt(prompt("Enter the endyear: "));
let yearList = []
for (let testYear = startYear; testYear <= endYear; testYear++){
    if((testYear%4 === 0) && (testYear%100 !==0) | (testYear%400===0)){
      yearList.push(testYear)
    }
}
let list = document.getElementById("task8")
yearList.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});

//Task 9
const task9 = document.querySelector('#task9');
const primeNumberCheck = parseInt(prompt("Enter an integer to check if it is a prime number."))
let isPrimeNumber = true
for(let temp = 2; temp <primeNumberCheck; temp++){
  if (primeNumberCheck % temp === 0){
    isPrimeNumber = false;
  }
}
if (isPrimeNumber == true){
  task9.innerHTML = `Number ${primeNumberCheck} is a prime number.`
}
else{
  task9.innerHTML = `Number ${primeNumberCheck} is not a prime number.`
}

//Task 10
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
