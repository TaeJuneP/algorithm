const dp05 = () => {
  let left = [1, 2, 3];
  let right = [1, 2, 3];
  const ln = left.length;
  const rn = right.length;
  const dp = new Array(ln).fill(0).map(v => new Array(rn).fill(0).map(v => -1));
  function f(l, r) {
    if (l === ln || r === rn) return 0;
    if (dp[l][r] !== -1) return dp[l][r];
    let max = 0;
    max = Math.max(f(l + 1, r), max);
    max = Math.max(f(l + 1, r + 1), max);
    if (left[l] > right[r]) max = Math.max(f(l, r + 1) + right[r], max);
    return (dp[l][r] = max);
  }
  console.log(dp)
  return f(0, 0);
};
dp05();
