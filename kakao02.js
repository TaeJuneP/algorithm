const kakao02 = () => {
  let N = 10;
  let stages = [1, 1, 1,9,8,7,11];
  let count = stages.length;
  let sum = [];
  let result = [];
  let answer = [];
  for (let i = 0; i < N + 2; i++) {
    sum.push(0);
  }
  stages.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  for (let i = 0; i < count; i++) {
    sum[stages[i]] += 1;
  }
  for (let i = 1; i < N + 2; i++) {
    if (count !== 0) {
      if (sum[i] === 0) {
        result.push([i, 0]);
      } else {
        result.push([i, sum[i] / count]);
      }
      count -= sum[i];
    } else {
      result.push([i, 0]);
    }
  }
  result.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });
  result.map(item => {
    if (item[0] !== N + 1) answer.push(item[0]);
  });
  return answer;
};
kakao02();
