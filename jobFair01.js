const jobFair01 = () => {
  let goods = [5, 3, 7];
  let boxes = [3, 7, 6];
  let count = 0;

  goods.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  boxes.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });

  let goodsIdx = 0;
  let boxesIdx = 0;

  while (goodsIdx < goods.length && boxesIdx < boxes.length) {
    if (goods[goodsIdx] <= boxes[boxesIdx]) {
      count++;
      goodsIdx++;
      boxesIdx++;
    } else {
      boxesIdx++;
    }
  }

  return count;
  let answer = 0;
  goods.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  boxes.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  let goodsIdx = 0;
  let boxesIdx = 0;

  while (goodsIdx < goods.length && boxesIdx < boxes.length) {
    if (goods[goodsIdx] <= boxes[boxesIdx]) {
      count++;
      goodsIdx++;
      boxesIdx++;
    } else {
      boxesIdx++;
    }
  }
};
jobFair01();
   // for (let j = 0; j < boxes.length; j++) {
    //   if (goods[i] <= boxes[j]) {
    //     boxes.splice(j, 1);
    //     answer++;
    //     break;
    //   }
    //   else {
    //     boxes.splice(j, 1);
    //   }
    // }