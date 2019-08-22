const test = () => {
  let answer = [0, 0, 0, 1];
  let pd = answer
    .map(v => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");
  console.log(pd[0] === "0" ? "0" : pd);
  return;
};
test();

function solution(numbers) {
  var answer = "";
  // 1. 숫자를 문자열로 변환
  // numbers.map(num => {
  //   num.toString();
  // });
  numbers.sort((a, b) => {
    if (a === b) {
      return false;
    }
    console.log(a, b);
    let aText = a.toString();
    let bText = b.toString();
    return aText + bText > bText + aText ? -1 : 1;
  });
  console.log(numbers.join(""));  
}
solution([0,0,0,1])