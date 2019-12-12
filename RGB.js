const test = () => {
  let rgb = "26 40 83 49 60 57 13 89 99";
  rgb = rgb.split(" ");
  let rgbArr = [];
  let k = [];
  let height = 0;
  for (let i = 0; i < rgb.length; i++) {
    k.push(Number(rgb[i]));
    if (k.length === 3) {
      rgbArr.push(k);
      k = [];
    }
  }
  let sum = 0;
  let max = [];
  for (let i = 0; i < 3; i++) {
    dp(rgbArr, 0, i, max, sum);
  }
  Math.min.apply(null, max);
};

const dp = (arr, k, i, max, sum) => {
  if (k === arr.length) {
    max.push(sum);
    return true;
  }
  sum += arr[k][i];
  if (i === 0) {
    dp(arr, k + 1, i + 1, max, sum);
    dp(arr, k + 1, i + 2, max, sum);
  }
  if (i === 1) {
    dp(arr, k + 1, i + 1, max, sum);
    dp(arr, k + 1, i - 1, max, sum);
  }
  if (i === 2) {
    dp(arr, k + 1, i - 1, max, sum);
    dp(arr, k + 1, i - 2, max, sum);
  }
};

test();
let input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function(line) {
    input.push(line.trim());
  })
  .on("close", function() {
    input.shift();
    input.forEach(v => {});
    beamLine.forEach((v, i) => {
      if (v === 0 && i !== 0 && i < max) {
        zeroCount++;
      }
    });
    const arr = beamLine.filter(v => v !== 0);
    let dp = [];
    const result = arr.reduce((max, val, i) => {
      const curDp =
        dp.reduce(
          (maxVal, curVal, j) =>
            arr[j] < arr[i] && curVal > maxVal ? curVal : maxVal,
          0
        ) + 1;
      dp.push(curDp);
      return max < curDp ? curDp : max;
    }, 0);
    console.log(max - result - zeroCount);
  });
