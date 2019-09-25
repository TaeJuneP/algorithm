const line05 = () => {
  let paper = [9, 9];
  let coni = [3, 2];
  let answer = 0;
  let k = [];
  let dp = [];
  let m = 3;
  let n = 2;
  for (let i = 0; i < m + 1; i++) {
    k.push(0);
  }
  for (let i = 0; i < n + 1; i++) {
    dp.push(k);
  }
  console.log(dp);
  dp[1][1] = 1;
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
        dp[i][j] += dp[i][j - 1];
      if (j == dp[i].length - 1) {
        answer = dp[i][j];
      }
    }
  }
  console.log(answer);
};
line05();
