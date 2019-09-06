const kakao02 = () => {
  let n = 5;
  let arr1 = [9, 20, 28, 18, 11];
  let arr2 = [30, 1, 21, 17, 28];
  let max = fla;
  let arr = [];
  let sum = Math.pow(2, n);
  for (let i = 0; i < n; i++) {
    max += "#";
    arr.push("");
  }
  for (let i = 0; i < n; i++) {
    if (arr1[i] < sum && arr2[i] < sum) {
      arr1[i] = arr1[i].toString(2);
      arr2[i] = arr2[i].toString(2);
    } else arr[i] = max;
  }
  console.log(max);
  console.log(arr1,arr2);
  console.log(arr);
};
kakao02();
