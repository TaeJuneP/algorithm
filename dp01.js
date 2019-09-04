const test = () => {
  let N = 2;
  let number = 11;
  let result = [];
  result.push([N]);
  for (let i = 1; i < 4; i++) {
    let sum = [];
    for (let j = 0; j < result[i - 1].length; j++) {
      sum.push(result[i - 1][j] + N);
      sum.push(Math.floor(result[i - 1][j] / N));
      sum.push(result[i - 1][j] * N);
      sum.push(result[i - 1][j] - N);
      sum.push((Number(result[i - 1][j] + "" + N)));
    }
    if(sum.indexOf(number)!==-1){
      return i      
      break
    }
    result.push(sum)
  }
  return -1
};
test();
