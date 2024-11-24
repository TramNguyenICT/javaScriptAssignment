//Task1
let num1 = parseFloat(prompt("Enter the 1st number:"))
let num2 = parseFloat(prompt("Enter the 2nd number:"))
let num3 = parseFloat(prompt("Enter the 3rd number:"))
let num4 = parseFloat(prompt("Enter the 4th number:"))
let num5 = parseFloat(prompt("Enter the 5th number:"))
numArray = [num1, num2, num3, num4, num5]
reverseArray = []
for (let i = 4; i >=0 ; i--){
  reverseArray.push(numArray[i])
}
console.log(reverseArray)

//Task2
'use strict';
const task2 = document.querySelector('#task2');
let numOfPeople = parseInt(prompt("How many participants are there?"))
let participantsList = []
for (let j = 0; j <numOfPeople; j++){
  let participantName = prompt("Tell me the name of participant "+ (j+1));
  participantsList.push(participantName)
}
participantsList.sort()
console.log(participantsList)
let ol = document.createElement("ol")

participantsList.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  ol.appendChild(li);
});
task2.appendChild(ol)

//Task3
'use strict';
const task3 = document.querySelector('#task3');
let dogList = []
for (let i = 0; i < 6; i++){
  let dogName = prompt("Enter the name of dog "+ (i+1));
  dogList.push(dogName)
}
dogList.sort()
dogList.reverse()
let ul = document.createElement("ul")
dogList.forEach((item)=>{
  let li = document.createElement("li")
  li.innerText=item;
  ul.appendChild(li);
});
task3.appendChild(ul)

//Task4
let userInput;
let numList = []
do{
  userInput = parseFloat(prompt("Enter a number (enter 0 to stop): "))
  numList.push(userInput)
} while (userInput != 0)
numList.sort()
numList.reverse()
for (let i = 0; i < numList.length; i++){
  console.log(numList[i])
}

//Task 5
let userNum;
let numList2 = []
do{
  userNum = parseFloat(prompt("Enter a number (enter a duplicate value to stop): "))
  if (numList2.include(userNum)){
    break;
  }
  numList2.push(userInput)
} while (true)
numList2.sort()
for (let i = 0; i < numList2.length; i++){
  console.log(numList2[i])
}

//Task6
'use strict';
const task6 = document.querySelector('#task6');
function randomDice(){
  return  Math.ceil((Math.random()*6))
}

let diceList = []
let diceValue;
  do{
    diceValue = randomDice()
    diceList.push(diceValue)
  } while (diceValue != 6)

let ul = document.createElement("ul")
diceList.forEach((item)=>{
  let li = document.createElement("li")
  li.innerText=item;
  ul.appendChild(li);
});
task6.appendChild(ul)

//Task7
'use strict';
const task7 = document.querySelector('#task7');
function randomDice2(diceSide){
  return  Math.ceil((Math.random()*diceSide))
}
let diceSide = parseInt(prompt("How many sides does the dice have?"))
let diceList = []
let diceValue;
  do{
    diceValue = randomDice2(diceSide)
    diceList.push(diceValue)
  } while (diceValue != diceSide)

let ul = document.createElement("ul")
diceList.forEach((item)=>{
  let li = document.createElement("li")
  li.innerText=item;
  ul.appendChild(li);
});
task7.appendChild(ul)

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

//Task 9
function even(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i ++){
    if (arr[i]%2 === 0){
      newArr.push(arr[i])
    }
  }
  return newArr
}

sampleArray = [2,7,4]
console.log(sampleArray)
console.log(even(sampleArray))

//Task10
let candidatesNum = parseInt(prompt("How many candidates are there?"))
let candidates = []
for (let i = 0; i < candidatesNum; i++){
  let candidateName = prompt(("Name for candidate "+ (i+1)).toLowerCase());
  candidates.push({name: candidateName, votes:0})
}

let votersNum = parseInt(prompt("How many voters?"))
for (let i = 0; i < votersNumNum; i++) {
  let choice = (prompt("Who do you vote for?").toLowerCase());
  let chosenCandidate = null;
  for (let j = 0; j < candidates.length; j++) {
    if (candidates[j].name === choice) {
      chosenCandidate = candidates[j];
      break;
    }
  }
  if(chosenCandidate != null){
    chosenCandidate.votes++
  }
}

candidates.sort((a, b) => {
   console.log(a, b);
   return b - a;
});

console.log("The winner is ", candidates[0].name, "with", candidates[0].votes)
console.log("Results:")
for (let i = 0; i < candidates.length; i++){
  console.log(candidates[i].name, ": ", candidates[i].votes, " votes")
}