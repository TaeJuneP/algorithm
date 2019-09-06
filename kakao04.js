const kakao04 = () => {
  let food_times = [3, 1, 1, 1, 2, 4, 3];
  let k = 12;
  let time = 0;
  let i = 0;
  let min = Math.min.apply(null, food_times);
  let sum = 0;
  for (let i = 0; i < food_times.length; i++) {
    sum += food_times[i];
  }
  if (sum <= k) {
    return -1;
  }
  while (time < k) {
    if (i === food_times.length) {
      i = 0;
    }
    if (food_times[i] === 0) {
      i++;
    } else {
      food_times[i]--;
      i++;
      time++;
    }
  }
  while (true) {
    if (i === food_times.length) {
      i = 0;
    }
    if (food_times[i] === 0) {
      i++;
    } else {
      return i + 1;
    }
  }
};
kakao04();
