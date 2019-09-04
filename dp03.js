const test = () => {
  triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
  let result = [];
  result.push([triangle[0][0]]);
  for (let i = 1; i < triangle.length; i++) {
    let sum = [];
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        sum.push(result[i - 1][j] + triangle[i][j]);
      } else if (j !== 0 && j !== triangle[i].length - 1) {
        if (result[i - 1][j - 1] > result[i - 1][j]) {
          sum.push(result[i - 1][j - 1] + triangle[i][j]);
        } else {
          sum.push(result[i - 1][j] + triangle[i][j]);
        }
      } else if (j === triangle[i].length - 1) {
        console.log(j);
        sum.push(result[i - 1][j - 1] + triangle[i][j]);
      }
    }
    result.push(sum);
  }
  console.log(Math.max.apply(null, result[triangle.length-1]));
};
test();
