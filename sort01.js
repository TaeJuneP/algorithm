const test = () => {
  let array = [1, 5, 2, 11, 13, 18, 6, 3, 7, 4];
  let command = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
  let answer = [];
  for (let i = 0; i < command.length; i++) {
    let pd = [];
    for (let j = command[i][0] - 1; j < command[i][1]; j++) {
      pd.push(array[j]);
    }
    pd.sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    });
    answer.push(pd[command[i][2] - 1]);
  }
  console.log(answer);
  return answer;
};
test();
