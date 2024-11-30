let cal = document.getElementById('calculation')
let calInput;
cal.addEventListener('input',function(evt){
  calInput = evt.target.value;
})
let result;
let calParts;
const p = document.getElementById('result')
let button = document.getElementById('start')
button.addEventListener('click',function(evt){
  if(calInput){
    if (calInput.includes('+')){
      calParts = calInput.split('+');
      result = parseInt(calParts[0])+parseInt(calParts[1]);
    }
    else if (calInput.includes('-')){
      calParts = calInput.split('-');
      result = parseInt(calParts[0])-parseInt(calParts[1]);
    }
    else if (calInput.includes('*')){
      calParts = calInput.split('*');
      result = parseInt(calParts[0])*parseInt(calParts[1]);
    }
    else if (calInput.includes('/')){
      calParts = calInput.split('/')
      if (calParts[1] == 0){
        result = "Can't divide to 0!";
      }
      else {
        result = parseInt(calParts[0])/parseInt(calParts[1]);
      }
    }
    else {
      result = 'Please enter a calculation.';
    }
  }
  else {
    result = 'Please enter a calculation.';
  }
  p.innerText = result;
})
