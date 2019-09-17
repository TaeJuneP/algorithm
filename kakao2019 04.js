const test = () => {
  let p = "(()())()";
  let result = [];
  let count = 0;
  let answer = 0;
  let left = 0;
  let right = 0;
  let last = "";
  let tf = "";
  let hard = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      count += 1;
    } else {
      count -= 1;
    }
    answer++;
    if (count === 0) {
      result.push(p.substr(i - answer + 1, answer));
      answer = 0;
    }
  }
  for (let j = 0; j < result.length; j++) {
    tf = "";
    left = 0;
    right = 0;
    for (let k = 0; k < result[j].length; k++) {
      if (result[j][k] === "(") {
        if (result[j].length / 2 - left > 0) {
          tf += result[j][k];
          left++;
        } else {
          tf += ")";
          right++;
        }
      } else {
        if (left > right + 1) {
          tf += result[j][k];
          right++;
        } else {
          if (k === result[j].length - 1) {
            tf += result[j][k];
          } else {
            tf += "(";
            left++;
          }
        }
      }
    }
    hard.push(tf);
  }
  hard.map(item => {
    last += item;
  });
  return last;
};
test();
