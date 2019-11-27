const test = () => {
  let budgets = [120, 110, 140, 150];
  let M = 485;
  let halfLength;
  let result = [];
  let sum1 = 0;
  let sum2 = 0;
  let left = false;
  let right = false;
  let check;
  let count = 0;
  let answer = 0;
  budgets.sort((a, b) => {
    return a > b ? 1 : a < b ? -1 : 0;
  });
  halfLength = budgets.length / 2;
  while (true) {
    if (left === false || right === false) {
      sum1 = 0;
      sum2 = 0;
      result = [];
      let arr1 = [];
      for (let j = 0; j < halfLength; j++) {
        arr1.push(budgets[j]);
      }
      result.push(arr1);
      arr1 = [];
      for (let j = halfLength; j < budgets.length; j++) {
        arr1.push(budgets[j]);
      }
      result.push(arr1);
      for (let i = 0; i < result[0].length; i++) {
        sum1 += result[0][i];
      }
      for (let i = 0; i < result[1].length; i++) {
        sum2 += result[0][result[0].length - 1];
      }
      if (sum1 + sum2 > M) {
        halfLength--;
        left = true;
        check = "l";
      } else if (sum1 + sum2 < M) {
        halfLength++;
        right = true;
        check = "r";
      } else {
        return halfLength;
      }
    } else {
      if (check === "r") {
        sum1 = 0;
        sum2 = 0;
        for (let i = 0; i < halfLength; i++) {
          sum1 += budgets[i];
        }
        count++;
        for (let i = halfLength; i < budgets.length; i++) {
          sum2 += budgets[halfLength - 1] + count;
        }
        if (sum1 + sum2 === M) {
          return budgets[halfLength - 1] + count;
        } else if (sum1 + sum2 > M) {
          return budgets[halfLength - 1] + count - 1;
        } else {
          answer = sum1 + sum2;
        }
      } else if (check === "l") {
        sum1 = 0;
        sum2 = 0;
        for (let i = 0; i < halfLength; i++) {
          sum1 += budgets[i];
        }
        count++;
        for (let i = halfLength; i < budgets.length; i++) {
          sum2 += budgets[halfLength - 1] + count;
        }
        if (sum1 + sum2 === M) {
          return budgets[halfLength - 1] + count;
        } else if (sum1 + sum2 > M) {
          return budgets[halfLength - 1] + count - 1;
        } else {
          answer = sum1 + sum2;
        }
      }
    }
  }
};
test();
