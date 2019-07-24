const test = () => {
  let progress = [93, 30, 55, 20,10];
  let speed = [1, 30, 5, 10,1];
  let complete = [];
  let answer = [];
  let count = 0;
  for (let i = 0; i < progress.length; i++) {
    let cur = String((100 - progress[i]) / speed[i]).split(".");
    if (cur.length > 1) {
      cur = Number(cur[0]) + 1;
    } else {
      cur = Number(cur[0]);
    }
    complete.push(cur);
  }
  let i = 0;
  while (complete.length > 0) {
    count = 0;
    let cur = complete.splice(0, 1)[0];
    count++;
    let j = 0;
    while (complete.length > 0) {
      if (cur >= complete[j]) {
        complete.shift();
        count++;
        if (complete.length === 0) {
          answer.push(count);
        }
      } else {
        answer.push(count);
        if (complete.length === 1) {
          answer.push(1);
        }
        break;
      }
    }
  }
};
test();
