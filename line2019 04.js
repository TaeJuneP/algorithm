const line04 = () => {
  const sit = 7;
  let chair = [1, 0, 1, 1];
  let count = 0;
  let result = [];
  for (let i = 0; i < chair.length; i++) {
    if (chair[i] === 1) {
      result.push(count);
      count = 0;
    }
    if (chair[i] === 0) {
      count++;
    }
  }
  console.log(Math.floor((Math.max.apply(null,result)-1)/2)+1);
};
line04();
