const test = () => {
  let a = 5;
  let b = 8;
  a = a + b; //13;
  b = a - b; //5;
  a = a - b;
  console.log(a, b);
};

test();
