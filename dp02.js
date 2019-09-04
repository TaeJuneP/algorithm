const test = () => {
  let N = 6;
  let result = [];
  let round = [];
  result.push(1);
  result.push(1);
  round.push(4);
  round.push(6)
  for (let i = 2; i < N; i++) {
    result.push(result[i - 1] + result[i - 2]);
    round.push(round[i-1]+result[i]*2)
  }
  console.log(result,round);
};
test();
