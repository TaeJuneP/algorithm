const test = () => {
  let arr = "()(((()())(())()))(())";
  let count = 0;
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]==="("){
        count+=1
    }
    else if(arr[i]===")"){
        count-=1
        if(arr[i-1]==="("){
            answer+=count
        }
        else{
            answer+=1
        }
    }

  }
  console.log(answer); 
  return answer;
};
test();
