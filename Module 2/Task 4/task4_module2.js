//Task4
let userInput;
let numList = []
do{
  userInput = parseFloat(prompt("Enter a number (enter 0 to stop): "))
  numList.push(userInput)
} while (userInput != 0)
numList.sort()
numList.reverse()
for (let i = 0; i < numList.length; i++){
  console.log(numList[i])
}