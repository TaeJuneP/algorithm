const test = () => {
  let word = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
  let queries = ["fro??", "????o", "fr???", "fro???", "pro?", "??kao"];
  let count = 0;
  let result = [];
  let answer = 0;
  word.sort((a, b) => {
    if (a < b) return -1;
    else if (a == b) return 0;
    else return 1;
  });
  word.sort((a, b) => a.length - b.length);
  console.log(word);
  console.log(queries);
  for (let i = 0; i < queries.length; i++) {
    answer = 0;
    for (let j = 0; j < word.length; j++) {
      if (queries[i].length === word[j].length) {
        count = 0;
        for (let k = 0; k < queries[i].length; k++) {
          if (queries[i][k] === word[j][k]) {
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
    console.log(answer)
    result.push(answer);
  }
  console.log(result);
  return result;
};
test();
