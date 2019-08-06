const test = () => {
  let answer = [0, 0, 1, 3, 4, 5, 7];
  let result = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] / 2 < 2 || answer[i] / 3 < 2) {
      result++;
      if (answer[i] === 0) {
        result--;
      }
    }
    for (let j = 0; j < answer.length; j++) {
      if (i == j) {
      } else {
        let k = String(answer[i]) + String(answer[j]);
        if (k / 2 < 2 || k / 3 < 2) {
          result++;
        }
      }
    }
  }
  console.log(result);
};
test();
