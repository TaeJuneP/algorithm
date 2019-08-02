const test = () => {
  let arr = [
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333"
  ];
  let answer = [];
  let pd = [];
  for (let i = 0; i < arr.length; i++) {
    let data = arr[i].split(" ");
    if (data[0] === "I") {
      pd.push(Number(data[1]));
    }
    if (data[0] === "D") {
      if (data[1] === "1") {
        pd.splice(pd.indexOf(Math.max.apply(null, pd)), 1);
      } else if (data[1] === "-1") {
        pd.splice(pd.indexOf(Math.min.apply(null, pd)), 1);
      }
    }
  }
  if (pd.length > 0) {
    answer.push(Math.max.apply(null, pd));
    answer.push(Math.min.apply(null, pd));
    return answer;
  } else {
    return [0, 0];
  }
};
test();
