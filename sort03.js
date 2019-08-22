const test = () => {
  let answer = [5, 0, 0];
  let j = 0;
  let result = [];
  answer.sort((a, b) => a - b);
  console.log(answer);
  for (let i = 0; i < answer.length; i++) {
    result.push(Math.min(answer[i], answer.length - i));
    console.log(result);
  }
  console.log(Math.max(...result));
};
test();
function solution(arr) {
  var answer = 0;
  arr.sort((a, b) => a - b);
  let h = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr.length - i) {
      h.push(arr[i]);
      console.log(h);
    } else {
      h.push(arr.length - i);
    }
  }
  if (h.length === 0 || Math.min(...arr) >= arr.length) {
    return arr.length;
  }
  console.log(h);
  console.log(Math.max(...h));
  return Math.max(...h);
  //  return h[h.length-1];
}
solution([5, 0, 0]);
