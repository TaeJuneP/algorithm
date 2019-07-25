const test = () => {
  let price = [3,1,4,5,6];
  let count = 0;
  let answer = [];
  for (let i = 0; i < price.length; i++) {
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
  console.log(answer)
};

const solution = () => {
  let prices = [3,1, 3,4,5];
  let answer = [];
  for (let i = 0; i < prices.length; i++) {
    let answerElm = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        answerElm++;
      }
      else{
        answerElm++;
        break;
      }
    }
    answer.push(answerElm);
  }
  return answer;
};
test();
solution()