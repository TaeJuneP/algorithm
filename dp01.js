const test = () => {
  let N = 2;
  let number = 11;
  let result = [];
  let k = "" + N;
  result.push([N]);
  for (let i = 1; i < 3; i++) {
    let sum = [];
    k += "" + N;
    sum.push(Number(k));
    for (let j = 0; j < result[i - 1].length; j++) {
      sum.push(result[i - 1][j] + N);
      sum.push(Math.floor(result[i - 1][j] / N));
      sum.push(result[i - 1][j] * N);
      sum.push(result[i - 1][j] - N);
    }
    // if (sum.indexOf(number) !== -1) {
    //   return i;
    //   break;
    // }
    result.push(sum);
  }
  console.log(result);
  return -1;
};
const test1 = () => {
  let N = 5;
  let number = 12;
  let result = [];
  result.push([N]);
  let k = "" + N;

  for (let i = 1; i < 4; i++) {
    let sum = [];
    k += "" + N;
    sum.push(Number(k));
    for (let j = 0; j < result[i - 1].length; j++) {
      sum.push(result[i - 1][j] + N);
      if (result[i - 1][j] !== 0) {
        sum.push(Math.floor(result[i - 1][j] / N));
      }
      sum.push(result[i - 1][j] * N);
      sum.push(result[i - 1][j] - N);
      if (i === 3) {
        // sum.push(result[i - 2][j] + result[i - 2][j]);
        if (result[i - 2][j] !== 0) {
          sum.push(Math.floor(result[i - 2][j] / result[i - 2][j]));
        }
        sum.push(result[i - 2][j] * result[i - 2][j]);
        // sum.push(result[i - 2][j] - result[i - 2][j]);
      }
    }
    // if (sum.indexOf(number) !== -1) {
    //   return i;
    //   break;
    // }
    let p = sum.reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );
    result.push(p);
  }
  console.log(result);
  return -1;
};
test1();
