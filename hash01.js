const test = () => {
  let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
  let completion = ["josipa", "filipa", "marina", "nikola"];
  let answer = "";
  participant.sort();
  completion.sort();
  completion.forEach(item => {
    participant.splice(participant.indexOf(item), 1);
  });

  // for(let i =0; i<participant.length; i++){
  //     if(participant[i]!==0){
  //         answer=participant[i]
  //     }
  // }
  console.log(participant);
  return answer;
};
test();
