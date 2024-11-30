const ul = document.getElementById('target')
const li1 = document.createElement('li')
li1.innerText = 'First item'
const li2 = document.createElement('li')
li2.innerText = 'Second item'
const li3 = document.createElement('li')
li3.innerText = 'Third item'
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

const list = document.querySelectorAll('ul li');
list[1].setAttribute('class','my-item')