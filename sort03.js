const test = () => {
  let answer = [4,0,1,7,2,0] ;
  let j = 0;
  let result = [];
  answer.sort((a, b) => a - b);
  console.log(answer);
  for (let i = 0; i < answer.length; i++) {
    result.push(Math.min(answer[i], answer.length - i));
    console.log(result);
  }
  console.log(Math.max(...result));
};
test();
