'use strict';

async function RandomJoke(){
  try{
    const response = await fetch(`https://api.chucknorris.io/jokes/random`)
    const responseJson = await response.json();
    console.log(responseJson.value)
  }
  catch (error) {
      console.log(error.message)
  }
};
RandomJoke()