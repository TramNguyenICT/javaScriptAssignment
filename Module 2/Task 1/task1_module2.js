//Task1
let num1 = parseFloat(prompt("Enter the 1st number:"))
let num2 = parseFloat(prompt("Enter the 2nd number:"))
let num3 = parseFloat(prompt("Enter the 3rd number:"))
let num4 = parseFloat(prompt("Enter the 4th number:"))
let num5 = parseFloat(prompt("Enter the 5th number:"))
numArray = [num1, num2, num3, num4, num5]
reverseArray = []
for (let i = 4; i >=0 ; i--){
  reverseArray.push(numArray[i])
}
console.log(reverseArray)
