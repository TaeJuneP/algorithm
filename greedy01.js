const test = () => {
  let n = 5;
  let lost = [2, 3, 4];
  let reserve = [3, 4, 5];
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        i--;
        j--;
        break;
      }
    }
  }
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j] - 1) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        i--;
        j--;
        break;
      } else if (lost[i] === reserve[j] + 1) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        i--;
        j--;
        break;
      }
    }
  }
  console.log(n - lost.length);
};
test();
