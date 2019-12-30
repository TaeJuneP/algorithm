let dp = [];
const main = () => {
  const input = "9";
  dp[0] = 1;
  dp[1] = 1;
  //   for (let i = 2; i <= input; i++) {
  //     dp[i] = dp[i - 2] + dp[i - 1];
  //   }
  console.log(tiling(input));
};
const tiling = n => {
  if (dp[n] > 0) {
    return dp[n];
  }
  dp[n] = (tiling(n - 2) + tiling(n - 1)) % 10007;
  return dp[n];
};
main();

let dp = [];
let input = [];
var require = require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function(line) {
    input.push(line.trim());
  })
  .on("close", function() {
    let k = Number(input[0]);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < k + 1; i++) {
      dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
    }
    console.log(dp[k]);
  });
