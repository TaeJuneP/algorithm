const test = () => {
  let n = 4;
  let cost = [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]];
  let answer = 0;
  cost.sort((a, b) => {
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
  });
  console.log(cost);
  return answer;
};
test();
