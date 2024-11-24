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