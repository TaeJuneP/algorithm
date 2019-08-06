const test = () => {
  let answer = [3, 30, 34, 5, 9];
  //   answer.sort();
  //   answer.reverse();
  let pd = answer
    .map(v => v+'')
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('')
  return answer[0] === "0" ? "0" : answer;
};
test();
