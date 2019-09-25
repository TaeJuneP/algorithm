const line02 = () => {
  let n = [1, 0, 2];
  let k = 10;
  let result = [];
  n.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  let p = k / (n.length - 1);
  console.log(Math.floor(p));
  for (let i = 0; i < n.length; i++) {
    let p = k / (n.length - 1);
    k = k - n.length;
    result.push(n.splice(p, 1));
    i--;
  }
  console.log(result);
};
line02();
