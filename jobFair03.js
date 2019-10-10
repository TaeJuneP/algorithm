const jobFair03 = () => {
  const sum = [];
  const len = arr.length;
  if (len === 1) {
    return arr[0];
  } else if (len === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  for (let i = len - 3; i >= 0; i--) {
    let max = 0;
    for (let j = i + 2; j <= i + 4; j++) {
      if (j >= len) {
        break;
      }
      if (sum[j] > 0 && arr[i] + sum[j] > max) {
        max = arr[i] + sum[j];
      } else if (arr[i] + arr[j] >= max) {
        max = arr[i] + arr[j];
      }
    }
    sum[i] = max;
  }
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (max <= sum[i]) {
      max = sum[i];
    }
  }
  return max;
};
jobFair03();
const sum = [];
const len = arr.length;
if (len === 1) {
  return arr[0];
} else if (len === 2) {
  return arr[0] > arr[1] ? arr[0] : arr[1];
}
for (let i = len - 3; i >= 0; i--) {
  let max = 0;
  for (let j = i + 2; j <= i + 4; j++) {
    if (j >= len) {
      break;
    }
    if (sum[j] > 0 && arr[i] + sum[j] > max) {
      max = arr[i] + sum[j];
    } else if (arr[i] + arr[j] >= max) {
      max = arr[i] + arr[j];
    }
  }
  sum[i] = max;
}
let max = 0;
for (let i = 0; i < len; i++) {
  if (max <= sum[i]) {
    max = sum[i];
  }
}
return max;
