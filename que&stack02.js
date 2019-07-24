<<<<<<< HEAD
function solution(heights) {
    let answer = [];
=======
const test = () => {
  let heights = [6, 9, 5, 7, 4];
  let answer = [];
>>>>>>> 0c5ad62b159e0f53a8d1b5081e23fe1b243fd4ad
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
<<<<<<< HEAD
}
=======
};
test();
>>>>>>> 0c5ad62b159e0f53a8d1b5081e23fe1b243fd4ad
