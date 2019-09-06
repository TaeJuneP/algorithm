const kakao = () => {
  let dartResult = "1D20S#10S";
  let result = [];
  let count = 0;
  let sum = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (String(Number(dartResult[i])) === "NaN") {
      if (dartResult[i] === "D") {
        result[count] *= result[count];
        count++;
      } else if (dartResult[i] === "T") {
        result[count] *= result[count] * result[count];
        count++;
      } else if (dartResult[i] == "S") {
        count++;
      }
      if (dartResult[i] === "#") {
        result[count - 1] *= -1;
      } else if (dartResult[i] === "*") {
        result[count - 1] *= 2;
        result[count - 2] *= 2;
      }
    } else {
      if (result[count] === undefined) {
        result.push(Number(dartResult[i]));
      } else {
        result[count] += "" + dartResult[i];
      }
    }
  }
  console.log(result);
  result.map(item => {
    sum += Number(item);
  });
  console.log(sum);
  return sum;
};
kakao();
