let count = 0;
const test = n => {
  let stack = [];
  enumerate(stack, 0, n);
  console.log(count);
};

const isPromising = (queen, r) => {
  for (let i = 0; i < r; i++) {
    if (queen[i] === queen[r]) {
      return false;
    }
    if (queen[i] - queen[r] === i - r) {
      return false;
    }
    if (queen[r] - queen[i] === i - r) {
      return false;
    }
  }
  return true;
};

const enumerate = (queen, r, n) => {
  if (r === n) {
    count++;
  } else {
    for (let i = 0; i < n; i++) {
      queen[r] = i;
      if (isPromising(queen, r)) {
        enumerate(queen, r + 1, n);
      }
    }
  }
};

test(8);
