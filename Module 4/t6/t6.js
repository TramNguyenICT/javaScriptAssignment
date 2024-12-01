'use strict';

const input = document.getElementById('query')
const submit = document.getElementById('submit')
let inputValue;

submit.addEventListener('click',async function(evt){
  evt.preventDefault()
  inputValue = input.value;
  let article = document.createElement('article')
  let p = document.createElement('p')
  article.appendChild(p)
  document.body.appendChild(article)
  try{
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${inputValue}`)
    const responseJson = await response.json();
    console.log(responseJson)
    if (responseJson.result.length > 1){
      p.innerText = responseJson.result[0].value
      }
    else {
      p.innerText = "No joke found for your search."
    }
  }
  catch (error) {
      console.log(error.message)
  }
});
