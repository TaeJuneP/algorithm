const test = () => {
  let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
  let queries = ["fro??", "????o", "fr???", "fro???", "pro?", "??kao"];
  let count = 0;
  let result = [];
  let answer = 0;
  words.sort((a, b) => {
    if (a < b) return -1;
    else if (a == b) return 0;
    else return 1;
  });
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < queries.length; i++) {
    answer = 0;
    for (let j = 0; j < words.length; j++) {
      if (queries[i].length === words[j].length) {
        count = 0;
        for (let k = 0; k < queries[i].length; k++) {
          if (queries[i][k] === words[j][k]) {
            count += 1;
          } else if (queries[i][k] === "?") {
            count += 1;
          }
          if (count === queries[i].length) {
            answer += 1;
          }
        }
      }
    }
    result.push(answer);
  }
  console.log(result);
  return result;
};
test();
