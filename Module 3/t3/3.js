'use strict';
const names = ['John', 'Paul', 'Jones'];
const ul = document.getElementById('target')
for (let i = 0; i <names.length; i++){
  let li = document.createElement('li')
  li.innerText=names[i]
  ul.appendChild(li)
}