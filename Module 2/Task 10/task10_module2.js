//Task10
let candidatesNum = parseInt(prompt("How many candidates are there?"))
let candidates = []
for (let i = 0; i < candidatesNum; i++){
  let candidateName = prompt(("Name for candidate "+ (i+1)).toLowerCase());
  candidates.push({name: candidateName, votes:0})
}

let votersNum = parseInt(prompt("How many voters?"))
for (let i = 0; i < votersNum; i++) {
  let choice = (prompt("Who do you vote for?").toLowerCase());
  if (choice === ""){
    continue;
  }
  let chosenCandidate = null;
  for (let j = 0; j < candidates.length; j++) {
    if (candidates[j].name === choice) {
      chosenCandidate = candidates[j];
      break;
    }
  }
  if(chosenCandidate != null){
    chosenCandidate.votes++
  }
  else{
    console.log("Invalid vote!")
  }
}

candidates.sort((a, b) => {
   console.log(a, b);
   return b.votes - a.votes;
});

console.log("The winner is", candidates[0].name, "with", candidates[0].votes)
console.log("Results:")
for (let i = 0; i < candidates.length; i++){
  console.log(candidates[i].name, ":", candidates[i].votes, "votes")
}