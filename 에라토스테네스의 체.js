let input = ["10 9"];
const main = () => {
  let k = input[0].split(" ");
  let count = 0;
  let check = [];
  
  for (let i = 2; i <= k[0]; i++) {
    if (!check[i]) {
      count++;
      check[i] = true;
      if (count === Number(k[1])) {
        return console.log(i);
      }
    }
    for (j = 2; j * i <= k[0]; j++) {
      if (!check[i * j]) {
        count++;
        check[i * j] = true;
      }

      if (count === Number(k[1])) {
        return console.log(i * j);
      }
    }
  }
};
main();
