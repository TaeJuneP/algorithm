const line02 = () => {
  let n = [1, 2, 3];
  let k = 3;
  let result = [];
  let q;
  n.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  let o;
  while (true) {
    let p = 1;
    for (let i = 1; i <= n.length - 1; i++) {
      p *= i;
    }
    q = k / p;
    o = String(q).split(".");
    if (Number(o[1]) > 0) {
      result.push(n.splice(Number(o[0]), 1));
    } else {
      result.push(n.splice(Number(o[0]) - 1, 1));
    }
    if (o.length === 1) {
      result.push(n.reverse());
      return console.log(result);
    }
    k = k % p;
  }
};
line02();
