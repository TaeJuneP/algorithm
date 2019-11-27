const test = () => {
  let s ="aabbaccc";
  let result = [];
  let words = [];
  let answer = "";
  let hard = [];
  for (let k = 1; k < s.length/2 +1; k++) {
    result = [];
    words = [];
    answer = "";
    for (let i = 0; i < s.length; ) {
      if (words.length === 0) {
        words.push(s.substr(i, k));
      } else {
        if (s.substr(i, k) === words[0]) {
          words.push(s.substr(i, k));
        } else {
          if (words.length === 1) {
            result.push(words[0]);
            words = [];
            words.push(s.substr(i, k));
          } else {
            result.push(words.length + words[0]);
            words = [];
            words.push(s.substr(i, k));
          }
        }
      }
      i += k;
    }
    if (words.length === 1) {
      result.push(words[0]);
    } else {
      result.push(words.length + words[0]);
    }
    result.map(item => {
      answer += item;
    });
    hard.push(answer.length);
  }
  if (hard.length === 0) {
    return s.length;
  }
  console.log(hard)
  return Math.min.apply(null, hard);
};
test();
