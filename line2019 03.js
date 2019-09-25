const line03 = () => {
  let time = [
    [0, 10],
    [5, 15],
    [13, 15],
    [20, 30],
    [25, 35],
    [26, 37],
    [27, 39]
  ];
  let toilet = [];
  let max = 0;
  let check = 0;
  time.sort((a, b) => {
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
  });
  while (true) {
    for (let i = 0; i < toilet.length; i++) {
      if (toilet[i][1] === check) {
        toilet.splice(i, 1);
        i--;
      }
    }
    if (time.length > 0) {
      if (time[0][0] === check) {
        toilet.push(time.shift());
        if (max < toilet.length) {
          max = toilet.length;
        }
      }
    }

    if (time.length === 0 && toilet.length === 0) {
      console.log(max);
      break;
    }
    check++;
  }
};
line03();
