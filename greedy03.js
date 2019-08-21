const test = () => {
  let number = 4177252841;
  let str = String(number);
  let k = 4;
  let arr = [];
  let arr1 = [];
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    arr.push(Number(str[i]));
    arr1.push(Number(str[i]));
  }
  arr1.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  console.log(arr1)
  console.log(arr)
  for (let i = 0; i < k; i++) {
    arr.splice(arr.indexOf(arr1[i]), 1);
  }
  for(let i =0; i<arr.length; i++){
    answer+=arr[i]+""
  }
  console.log(arr1)
  console.log(arr)
  console.log(answer)
  return answer;
};
test();
