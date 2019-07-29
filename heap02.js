const test = () => {
  let stock = 4;
  let dates = [4, 10, 15];
  let supplies = [12, 5, 10];
  let k = 30;
  let index = 0;
  let answer = 0;
  let pd = [];
  for (let i = 0; i < k; i++) {
    for (let j = index; j < dates.length; j++) {
      if (i === dates[j]) {
        pd.push(supplies[j]);
        pd.sort();
        index = j;
      }
    }
    console.log(pd);
    if (stock === 0) {
      stock = pd.shift();
      answer++;
    }
    stock--;
  }
  console.log(answer);
};
test();
