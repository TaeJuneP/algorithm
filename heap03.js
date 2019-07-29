const test = () => {
  let jobs = [
    [0, 3],
    [1, 9],
    [2, 6],
    [1, 2],
    [3, 7],
    [2, 2],
    [1, 12],
    [2, 20],
    [3, 16]
  ];
  let pd = [];
  let number = jobs.length;
  let answer;
  let remind = 0;
  let time = 0;
  let time1 = 0;
  jobs.sort((a, b) => {
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
  });
  console.log(jobs)
  while (true) {
    for (let i = 0; i < jobs.length; i++) {
      if (time === jobs[i][0]) {
        pd.push({ start: jobs[i][0], end: jobs[i][1] });
        console.log(jobs)
        jobs.shift()
        i--
        pd.sort((a, b) => {
          return a.end < b.end ? -1 : a.end > b.end ? 1 : 0;
        });
      }
    }
    if (remind === 0) {
        console.log(pd)
      if (pd.length > 0) {
        let cut = pd.shift();
        time1 += time - cut["start"] + cut["end"];
        remind += cut["end"];
      }
    }
    remind--;
    time++;
    if (pd.length === 0 && remind === 0 && jobs.length === 0) {
      answer = Math.floor(time1 / number);
      console.log(answer);
      return answer;
    }
  }
};
test();
