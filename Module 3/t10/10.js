const input1 = (document.getElementsByName('firstname'))[0];
let firstname;
input1.addEventListener('input',function(evt){
  firstname = evt.target.value;
});


const input2 = (document.getElementsByName('lastname'))[0];
let lastname;
input2.addEventListener('input',function(evt){
  lastname = evt.target.value;
});

const p = document.getElementById('target');

const submit = document.querySelector('input[type="submit"]');
submit.addEventListener('click',function(evt){
  evt.preventDefault();
  p.innerText = `Your name is ${firstname} ${lastname}`;
});