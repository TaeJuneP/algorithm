const test = () => {
  let red = 2;
  let brown = 9;
  let answer = [];
  let sum = [];
  let colorSum = red + brown;
  let i = 1;
  while (colorSum / i >= 1) {
    let cal = colorSum / i;
    let cut = String(cal).split(".");
    if (cut.length < 2) {
      answer.push([cal, i]);
    }
    i++;
  }
  console.log(answer)
  for (let i = 0; i < answer.length; i++) {
    sum.push(answer[i][0] + answer[i][1]);
    if (i > 0) {
      if (sum[i - 1] <= sum[i]) {
        answer=answer[i-1]
        break;
      }
    }
  }
  console.log(answer);
};
test();
