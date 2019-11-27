const test = () => {
  let k = [];
  let p = [];
  for (let i = 0; i < 3; i++) {
    k.push(0);
  }
  for (let i = 0; i < 3; i++) {
    p.push(k);
  }
  p[0][0] = 1;
  console.log(p);
};
test();
