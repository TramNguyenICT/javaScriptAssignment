let userNum;
let numList2 = []
do{
  userNum = parseFloat(prompt("Enter a number (enter a duplicate value to stop): "))
  if (numList2.includes(userNum)){
    break;
  }
  numList2.push(userNum)
} while (true)
numList2.sort()
for (let i = 0; i < numList2.length; i++){
  console.log(numList2[i])
}