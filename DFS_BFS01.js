// const test = () => {
//   let numbers = [1, 1, 1, 1, 1];
//   let target = 3;
//   let answer = 0;
//   const dfs = (target, numbers, k) => {
//     if (k === numbers.length) {
//       let sum = 0;
//       for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//       }
//       if (sum === target) answer++;
//       return;
//     } else {
//       numbers[k] *= 1;
//       dfs(target, numbers, k + 1);
//       numbers[k] *= -1;
//       dfs(target, numbers, k + 1);
//     }
//   };
//   dfs(target, numbers, 0);
//   console.log(answer)
//   return answer;
// };
// test();
let answer = 0;
function solution(numbers, target) {
  dfs(numbers, target, 0)
  console.log(answer)
  return answer;
}

function dfs(numbers, target, k) {
  if (k === numbers.length) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    if (sum === target) {
      answer++
    }
  } else {
    numbers[k] *= 1;
    dfs(numbers, target, k + 1);
    numbers[k] *= -1;
    dfs(numbers, target, k + 1);
  }
}

solution([1, 1, 1, 1, 1], 3)