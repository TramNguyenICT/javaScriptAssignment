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