const test = () => {
  let n = 5;
  let build_frame = [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [2, 1, 0, 1],
    [2, 2, 1, 1],
    [5, 0, 0, 1],
    [5, 1, 0, 1],
    [4, 2, 1, 1],
    [3, 2, 1, 1]
  ];
  let result = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(2));
  for (let i = 0; i < build_frame.length; i++) {
    if (build_frame[i][3] === 1) {
      result[build_frame[i][1]][build_frame[i][0]] = build_frame[i][2];
    }
  }
  console.log(result);
};
test();
