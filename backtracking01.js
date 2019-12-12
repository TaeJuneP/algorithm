const test = () => {
  let insert =
    "0 3 5 4 6 9 2 7 8 7 8 2 1 0 5 6 0 9 0 6 0 2 7 8 1 3 5 3 2 1 0 4 6 8 9 7 8 0 4 9 1 3 5 0 6 5 9 6 8 2 0 4 1 3 9 1 7 6 5 2 0 8 0 6 0 3 7 0 1 9 5 2 2 5 8 3 9 4 7 6 0";
  let arr = insert.split(" ");
  let insertArr = [];
  let k = [];
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    k.push(Number(arr[i]));
    if (k.length === 9) {
      insertArr.push(k);
      k = [];
    }
  }
  simulate(insertArr, stack, 0, 0, 1);
  console.log(insertArr);
};

const check = (insertArr, j, k) => {
  console.log(j, k);
  for (let i = 0; i < 9; i++) {
    if (k != i) {
      if (insertArr[j][k] === insertArr[j][i]) {
        console.log("1");
        return false;
      }
    }
    if (j != i) {
      if (insertArr[j][k] === insertArr[i][k]) {
        console.log("2");
        return false;
      }
    }
    // if (i != 0) {
    //   if (j + i < 9 && k + i < 9 && k - i >= 0 && j - i >= 0) {
    //     if (insertArr[j][k] === insertArr[j + i][k + i]) {
    //       console.log("3");
    //       return false;
    //     }
    //     if (insertArr[j][k] === insertArr[j - i][k + i]) {
    //       console.log("4");
    //       return false;
    //     }
    //     if (insertArr[j][k] === insertArr[j + i][k - i]) {
    //       console.log("5");
    //       return false;
    //     }
    //     if (insertArr[j][k] === insertArr[j - i][k - i]) {
    //       console.log("6");
    //       return false;
    //     }
    //   }
    // }
  }
  return true;
};
const simulate = (arr, stack, j, k, q) => {
  console.log(arr);
  if (stack.length > 0) {
    if (stack[stack.length - 1][0] === j && stack[stack.length - 1][1] === k) {
      stack[stack.length - 1][2] = q;
      arr[j][k] = q;
    }
  }
  if (arr[j][k] === 0) {
    stack.push([j, k, q]);
    arr[j][k] = q;
  }
  if (check(arr, j, k)) {
    console.log("Check");
    if (k === 8 && j == 8) {
      return true;
    }
    if (k < 8) {
      simulate(arr, stack, j, k + 1, 1);
    } else {
      simulate(arr, stack, j + 1, 0, 1);
    }
  } else {
    if (q < 9) {
      simulate(arr, stack, j, k, q + 1);
    } else {
      console.log(arr, stack, j, k, q);
      stack.pop();
      simulate(
        arr,
        stack,
        stack[stack.length - 1][0],
        stack[stack.length - 1][1],
        stack[stack.length - 1][2] + 1
      );
    }
  }

  console.log(arr);
};
test();
