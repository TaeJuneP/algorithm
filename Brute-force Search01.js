const test = () => {
  let answer = [1, 3, 2, 4, 2];
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let a1 = [0, 0, 0];
  let j1 = 0;
  let j2 = 0;
  let j3 = 0;
  let answer1 = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === arr1[j1]) {
      a1[0]++;
    }
    if (answer[i] === arr2[j2]) {
      a1[1]++;
    }
    if (answer[i] === arr3[j3]) {
      a1[2]++;
    }
    j1++;
    if (j1 === 5) {
      j1 = 0;
    }
    j2++;
    if (j2 === 8) {
      j2 = 0;
    }
    j3++;
    if (j3 === 10) {
      j3 = 0;
    }
  }
  console.log(Math.max(...a1));
  for (let i = 0; i < a1.length; i++) {
    if (Math.max(...a1) === a1[i]) {
      answer1.push(i+1);
    }
  }
  console.log(answer1)
};
test();
