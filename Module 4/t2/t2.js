'use strict';
const input = document.getElementById('query')
const submit = document.querySelector('input[type="submit"]')
let inputValue;
submit.addEventListener('click',async function(evt){
  inputValue = input.value
  console.log(inputValue)
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
    const responseJson = await response.json();
    console.log(responseJson)
  }
  catch (error){
    console.log(error.message)
  }
});
