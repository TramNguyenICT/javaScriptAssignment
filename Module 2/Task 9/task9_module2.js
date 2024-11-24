//Task 9
function even(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i ++){
    if (arr[i]%2 === 0){
      newArr.push(arr[i])
    }
  }
  return newArr
}

sampleArray = [2,7,4]
console.log(sampleArray)
console.log(even(sampleArray))