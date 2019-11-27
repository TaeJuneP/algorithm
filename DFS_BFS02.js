let result;
const test = () => {
  let n = 4;
  let computers = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]];
  let answer = 0;
  result = Array(n)
    .fill()
    .map(() => Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    if (!result[i][i]) {
      dfs(computers, i, n);
      answer++;
    }
  }
};
const dfs = (computers, idx, n) => {
  for (let i = 0; i < n; i++) {
    if (computers[idx][i] == 1 && !result[idx][i]) {
      result[idx][i] = result[i][idx] = true;
      dfs(computers, i, n);
    }
  }
};
test();
