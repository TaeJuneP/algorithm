const naver03 = () => {
  let data = [[1, 0, 5], [2, 2, 2], [3, 3, 1], [4, 4, 1], [5, 10, 2]];
  let wait = [];
  let text = [];
  let time = -1;
  let result = [];
  let i = 0;
  data.sort((a, b) => {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  while (true) {
    if (data.length !== 0) {
      if (data[0][1] === time) {
        wait.push(data.shift());
        wait.sort((a, b) => {
          return a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0;
        });
      }
    }
    if (text.length === 0 && wait.length > 0) {
      text.push(wait.shift(), time);
    }
    console.log(text);
    if (text.length > 0) {
      if (time === text[1] + text[0][2]-1) {
        result.push(text[0][0]);
        text.shift();
        text.shift();
      }
    }
    if (data.length === 0 && wait.length === 0 && text.length === 0) {
      return result;
    }
    time++;
  }
};
naver03();
