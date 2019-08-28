// const test = () => {
//   let number = 4177252841;
//   let str = String(number);
//   let k = 4;
//   let arr = [];
//   let arr1 = [];
//   let answer = "";
//   for (let i = 0; i < str.length; i++) {
//     arr.push(Number(str[i]));
//     arr1.push(Number(str[i]));
//   }
//   arr1.sort((a, b) => {
//     return a < b ? -1 : a > b ? 1 : 0;
//   });
//   console.log(arr1);
//   console.log(arr);
//   for (let i = 0; i < k; i++) {
//     arr.splice(arr.indexOf(arr1[i]), 1);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     answer += arr[i] + "";
//   }
//   console.log(arr1);
//   console.log(arr);
//   console.log(answer);
//   return answer;
// };
const test1 = () => {
  let number = 4177252841;
  let k = 4;
  let arr1 = [];
  let numberarr = [];
  let arr = [];
  let strnumber = String(number);
  for (let i = 0; i < strnumber.length; i++) {
    numberarr.push(Number(strnumber[i]));
  }
  while (k > 0) {
    console.log(k);
    console.log(numberarr);
    for (let i = 0; i < k; i++) {
      arr.push(Number(numberarr[i]));
    }
    console.log(arr);
    let max = arr.indexOf(arr.reduce(function(a, b) {
      return Math.max(a, b);
  }));
    k -= max;
    for (let i = 0; i < k; i++) {
      numberarr.shift();
    }
    arr1.push(numberarr.shift());
    arr=[]
    console.log(arr);
    console.log(arr1, numberarr);
  }
  // console.log(max);
  // for (let i = max; i < strnumber.length; i++) {
  //   arr1.push(Number(strnumber[i]));
  // }
  // console.log(arr1);
  // for (let i = 0; i < k - max; i++) {
  //   arr1.splice(arr1.indexOf(Math.min.apply(null, arr1)), 1);
  // }
  // console.log(arr1);
};
test1();
