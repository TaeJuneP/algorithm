const dp04 = () => {
    let puddles = [];
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
    console.log(dp)
    puddles.map(item => {
      dp[item[1]][item[0]] = -1;
    });
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < m + 1; j++) {
        if (dp[i][j] === -1) {
          dp[i][j] = 0;
        } else {
          if (i === 1) {
            dp[i][j] += dp[i][j - 1];
          } else {
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
          }
        }
        if (j == dp[i].length - 1) {
          answer = dp[i][j];
        }
      }
    }
    console.log(dp);
    console.log(answer);
  };
  dp04();