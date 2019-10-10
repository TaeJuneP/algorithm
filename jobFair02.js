const jobFair02 = () => {
  let A = 1;
  let B = 2;
  let C = 3;
  let D = 4;
  let E = 5;
  let F = 6;
  let G = 7;
  let H = 8;
  let bishops = ["A1"];
  let result = [];
  let check = [];
  for (let i = 0; i < bishops.length; i++) {
    check.push([eval(bishops[i][0]), Number(bishops[i][1])]);
    let j = 0;
    let count = [];
    while (true) {
      if (check[i][0] - j > 0 && check[i][1] - j > 0) {
        result[[check[i][0] - j, check[i][1] - j]] = true;
      } else {
        count[0] = true;
      }
      if (check[i][0] + j < 9 && check[i][1] + j < 9) {
        result[[check[i][0] + j, check[i][1] + j]] = true;
      } else {
        count[1] = true;
      }
      if (check[i][0] - j > 0 && check[i][1] + j < 9) {
        result[[check[i][0] - j, check[i][1] + j]] = true;
      } else {
        count[2] = true;
      }
      if (check[i][0] + j < 9 && check[i][1] - j > 0) {
        result[[check[i][0] + j, check[i][1] - j]] = true;
      } else {
        count[3] = true;
      }
      if (
        count[0] === true &&
        count[1] === true &&
        count[2] === true &&
        count[3] === true
      ) {
        break;
      }
      j++;
    }
  }
  console.log(result);
  console.log(Object.keys(result).length)
  return 64 - Object.keys(result).length;
};
jobFair02();
