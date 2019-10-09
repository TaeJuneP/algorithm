const naver04 = () => {
  let stage = [5, 30, 15, 30, 35, 20, 4];
  let relate = [[2, 4], [2, 5], [3, 4], [3, 5], [1, 6], [4, 6], [5, 6], [6, 7]];
  let k = 6;
  let result = [];
  let time = 0;
  let max = 0;
  for (let i = 0; i < k; i++) {
    result.push(false);
  }
  relate.sort((a, b) => {
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
  });
  console.log(relate);
  while (true) {
    for (let i = 0; i < relate.length; i++) {
      if (result[i] === false) {
        result[relate[i][1]] = true;
      }
    }
  }
  //   while (true) {
  //     let flag = false;
  //     for (let i = 0; i < relate.length; i++) {
  //       if (relate[i][1] === k) {
  //         result.push(relate[i][0]);
  //         relate.splice(i, 1);
  //         i--;
  //         flag = true;
  //       }
  //     }
  //     for (let i = 0; i < result.length; i++) {
  //       for (let j = 0; j < relate.length; j++) {
  //         if (result[i] === relate[j][1]) {
  //           result.push(relate[j][0]);
  //           relate.splice(j, 1);
  //           j--;
  //           flag = true;
  //         }
  //       }
  //     }
  //     if (flag === false) {
  //       break;
  //     }
  //   }
  //   let o = result.filter((item, index) => result.indexOf(item) === index);
  //   console.log(o);
};
naver04();
