let v = [];
const solution = () => {
  let begin = "hit";
  let target = "cog";
  let words = ["hot", "dot", "dog", "lot", "log", "cog"];
  v = [words.length + 1];
  for (let i = 0; i < words.length; i++) {
    if (target.equals(words[i])) return dfs(begin, target, words);
  }
  return 0;
};
const dfs = (begin, target, words) => {
  let answer = 0;
  let dupBegin;

  for (let i = 0; i < words.length; i++) {
    if (v[i]) continue;

    for (let j = 0; j < begin.length(); j++) {
      dupBegin = begin;
      dupBegin =
        (j > 0 ? begin.substring(0, j) : "") +
        words[i].charAt(j) +
        (j < begin.length() - 1 ? begin.substring(j + 1) : "");

      if (dupBegin.equals(target)) return 1;
      if (dupBegin.equals(words[i])) {
        v[i] = true;
        answer = 1;
        answer += dfs(dupBegin, target, words);
      }
    }
  }
  return answer;
};
solution();
