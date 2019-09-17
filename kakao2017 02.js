const kakao02 = () => {
  let n = 5;
  let arr1 = [9, 20, 28, 18, 11];
  let arr2 = [30, 1, 21, 17, 28];
  let max = "";
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
  for (let i = 0; i < n; i++) {
    if (arr[i] === "") {
      if (arr1[i].length < n) {
        let def = n - arr1[i].length;
        let zero = "";
        for (let k = 0; k < def; k++) {
          zero += "0";
        }
        arr1[i] = zero + arr1[i];
      }
      if (arr2[i].length < n) {
        let def = n - arr2[i].length;
        let zero = "";
        for (let k = 0; k < def; k++) {
          zero += "0";
        }
        arr2[i] = zero + arr2[i];
      }
      for (let j = 0; j < n; j++) {
        if (arr1[i][j] === "1" || arr2[i][j] === "1") {
          arr[i] += "#";
        } else {
          console.log(arr1[i][j]);
          arr[i] += " ";
        }
      }
    }
  }
  console.log(max);
  console.log(arr1, arr2);
  console.log(arr);
};
kakao02();
