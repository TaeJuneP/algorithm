const test = () => {
  let money = [1, 5, 2, 2, 5, 1, 2];
  let result = [];
  let answer = [];
  let result1 = [];
  result1.push([0]);
  result1.push([0, money[1]]);
  result.push([money[0]]);
  result.push([money[0], money[1]]);
  for (let i = 2; i < money.length; i++) {
    let seed = [];
    let seed1 = [];
    if (i === money.length - 1) {
      for (let j = 0; j < result[i - 2].length; j++) {
        seed.push(money[i] + result[i - 2][j] - money[0]);
      }
      for (let j = 0; j < result[i - 1].length; j++) {
        seed.push(result[i - 1][j]);
      }
    } else {
      for (let j = 0; j < result[i - 2].length; j++) {
        seed.push(money[i] + result[i - 2][j]);
      }
      for (let j = 0; j < result[i - 1].length; j++) {
        seed.push(result[i - 1][j]);
      }
    }
    for (let j = 0; j < result1[i - 2].length; j++) {
      seed1.push(money[i] + result1[i - 2][j]);
    }
    for (let j = 0; j < result1[i - 1].length; j++) {
      seed1.push(result1[i - 1][j]);
    }
    result.push(seed);
    result1.push(seed1);
  }
  let left = Math.max.apply(null, result[result.length - 1]);
  let right = Math.max.apply(null, result1[result1.length - 1]);
  if (right > left) {
    console.log(right);
  } else {
    console.log(left);
  }
  console.log(result1);
  console.log(result);
};
test();
