const test = () => {
  let weight = [3, 1, 6, 2, 7, 30, 1];
  weight.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  let s = 1;
  for (let i = 0; i < weight.length; i++) {
    console.log(s, weight[i]);
    if (s < weight[i]) {
      break;
    }
    s += weight[i];
  }
  console.log(s);
  return s;
};
test();
