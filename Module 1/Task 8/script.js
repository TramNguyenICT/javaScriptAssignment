//Task 8
'use strict';
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
