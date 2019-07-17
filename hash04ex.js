const test = () => {
  let genres = ["classic", "pop", "classic", "classic", "pop"];
  let plays = [500, 600, 150, 800, 2500];
  var answer = [];
  let obj = {
    max: []
  };
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
  console.log(obj)
  Object.keys(obj).forEach(key => {
      console.log(key)
    obj[key].sort((a, b) => {
        console.log(a,b)
      return a.p > b.p ? -1 : a.p < b.p ? 1 : 0;
    });
  });
  console.log(obj);
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
  console.log(answer)

  return answer;
};
test();
