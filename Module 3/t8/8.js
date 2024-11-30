const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
let num1Content = 0
let num2Content = 0
num1.addEventListener('input',function(evt){
  num1Content = parseInt(evt.target.value);
});
num2.addEventListener('input',function(evt){
  num2Content = parseInt(evt.target.value);
});
const p = document.getElementById('result')
const oper = document.getElementById('operation')
button = document.getElementById('start')

button.addEventListener('click',function(evt){
  let result;
  if (oper.value == 'add'){
    result = num1Content+num2Content
  }
  else if(oper.value == 'sub'){
    result = num1Content-num2Content
  }
  else if(oper.value == 'multi'){
    result = num1Content*num2Content
  }
  else if(oper.value == 'div'){
    if (num2Content == 0){
      result = "Can't divide to 0!"
    }
    else {
      result = num1Content / num2Content
    }
  }
  p.innerText = result
})