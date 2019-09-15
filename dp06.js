const test = () => {
  let money = [1, 2, 3, 1, 21, 3,100,1,1,100];
  let result = [];
  let answer = [];
  result.push(money[0]);
  for (let i = 1; i < money.length; i++) {
    if (money[i - 1] < money[i]) {
      if (result[i - 2] !== undefined) {
        result.push(result[i - 2] + money[i]);
      } else {
        result.push(money[i]);
      }
    } else {
      result.push(result[i - 1]);
    }
  }
  console.log(result);
  return result[money.length - 1];
};
test();
