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