'use strict';
const input = document.getElementById('query')
const submit = document.querySelector('input[type="submit"]')
let div1 = document.createElement('div')
div1.setAttribute('id','results')
document.body.appendChild(div1)
let inputValue;
submit.addEventListener('click',async function(evt){
  inputValue = input.value
  console.log(inputValue)
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
    const responseJson = await response.json();
    console.log(responseJson)
    div1.innerHTML =''
    for (let i = 0; i <responseJson.length; i++) {
      let article = document.createElement('article')
      let h2 = document.createElement('h2')
      h2.innerText = responseJson[i].show.name
      let a = document.createElement('a')
      a.target= '_blank'
      a.href= responseJson[i].show.url
      a.innerText = responseJson[i].show.url
      let img = document.createElement('img')
      img.src= ((responseJson[i].show.image?.medium) ? responseJson[i].show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found')
      img.alt= responseJson[i].show.name
      let div = document.createElement('div')
      div.innerHTML = responseJson[i].show.summary
      article.appendChild(h2)
      article.appendChild(a)
      article.appendChild(img)
      article.appendChild(div)
      div1.appendChild(article)
    }
  }
  catch (error){
    console.log(error.message)
  }
});


