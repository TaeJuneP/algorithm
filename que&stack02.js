function solution(heights) {
    let answer = [];
  for (let i = 0; i < heights.length; i++) {
    answer.push(0);
  }
  for (let i = heights.length - 1; i >= 0; i--) {
    let cut = heights.splice(i, 1)[0];
    for (let j = heights.length - 1; j >= 0; j--) {
      if(cut < heights[j]) {
        answer[i] = j+1;
        break;
      }
    }
  }
  return answer;
}
