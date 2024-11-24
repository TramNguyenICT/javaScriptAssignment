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