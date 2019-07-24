const test = () => {
  let price = [1, 2, 3, 2, 3, 1];
  let count = 0;
  let answer = [];
  for (let i = 0; i < price.length; i++) {
    // let cur = price.splice(0, 1)[0];
    count = 0;
    for (let j = i + 1; j < price.length; j++) {
      if (price[i] > price[j]) {
        count++;
        answer.push(count);
        break;
      } else if (j === price.length - 1) {
        count++;
        answer.push(count);
      } else {
        count++;
      }
    }
    if (i === price.length - 1) {
      answer.push(count);
    }
  }
  console.log(answer);
};
test();
