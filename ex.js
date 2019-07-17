function solution(participant, completion) {
    let hashed = [];
   participant.forEach(person => {
       hashed[person] = hashed[person] ? hashed[person]+1 : 1;
   })
   completion.forEach(person => {
       hashed[person] = hashed[person]-1
   })
   for(let key in hashed){
       if(hashed[key] >= 1){
           return key
       }
   };
}