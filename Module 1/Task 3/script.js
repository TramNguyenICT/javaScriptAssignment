function financial(x){
  return Number.parseFloat(x).toFixed(2);
}

//Task 3
'use strict';
const task3 = document.querySelector('#task3');

let num1 = parseInt(prompt("Enter the 1st integer: "));
let num2 = parseInt(prompt("Enter the 2nd integer: "));
let num3 = parseInt(prompt("Enter the 3rd integer: "));
sum = num1 + num2 + num3;
product = num1*num2*num3;
average = sum/3;
console.log("num1: ",num1);
console.log("num2: ",num2);
console.log("num3: ",num3);
console.log("sum: ",sum);
console.log("product: ",product);
console.log("average: ",average);
task3.innerHTML = `The sum is ${sum}, the product is ${product}, the average is ${financial(average)}.`;
