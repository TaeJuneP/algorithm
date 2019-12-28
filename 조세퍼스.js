const main = () => {
  const input = [7, 3];
  let rotate = [];
  let answer = [];
  for (let i = 1; i < input[0] + 1; i++) {
    rotate.push(i);
  }
  let count = 0;
  while (rotate.length) {
    console.log("hi");
    count++;
    if (count === input[1]) {
      answer.push(rotate.shift());
      count = 0;
    } else {
      rotate.push(rotate.shift());
    }
  }
  console.log(answer);
};

main();
