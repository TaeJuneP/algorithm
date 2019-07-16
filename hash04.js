const test = () => {
  var answer = [];
  let obj = {
    max: []
  };
  let tmp = [];
  for (let i in genres) {
    if (obj[genres[i]]) {
      for (let j in obj.max) {
        if (obj.max[j].genres == genres[i]) {
          obj.max[j].p += plays[i];
        }
      }
      obj[genres[i]].push({
        id: i,
        p: plays[i]
      });
    } else {
      obj[genres[i]] = [];
      obj.max.push({
        genres: genres[i],
        p: plays[i]
      });
      obj[genres[i]].push({
        id: i,
        p: plays[i]
      });
    }
  }
  let tmpArr = [0];

  Object.keys(obj).forEach(key => {
    obj[key].sort((a, b) => {
      return a.p > b.p ? -1 : a.p < b.p ? 1 : 0;
    });
  });

  for (let i in obj.max) {
    let g = obj.max[i].genres;
    let k = 2;
    if (obj[obj.max[i].genres].length < 2) {
      k = 1;
    }
    for (let j = 0; j < k; j++) {
      answer.push(parseInt(obj[g][j].id));
    }
  }
  return answer;
};
