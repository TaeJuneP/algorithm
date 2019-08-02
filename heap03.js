const test = () => {
  let jobs = [
    [0, 3],
    [1, 9],
    [2, 6],
  ];
  let pd = [];
  let number = jobs.length;
  let answer;
  let remind = 0;
  let time = 0;
  let time1 = 0;
  let index = 0;
  jobs.sort((a, b) => {
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
  });
  while (true) {
    for (let i = index; i < jobs.length; i++) {
      if (time === jobs[i][0]) {
        pd.push({ start: jobs[i][0], end: jobs[i][1]});
        pd.sort((a, b) => {
          return a.end < b.end ? -1 : a.end > b.end ? 1 : 0;
        });
        index = i;
      }
    }
    if (remind === 0) {
      if (pd.length > 0) {
        let cut = pd.shift();
        time1 += time - cut["start"] + cut["end"];
        remind += cut["end"];
      }
    }
    remind--;
    time++;
    if (pd.length === 0 && remind === 0 && jobs.length === index+1) {
      answer = Math.floor(time1 / number);
      return answer;
    }
  }
};
test();
