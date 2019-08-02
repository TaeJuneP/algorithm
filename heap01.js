var array_length;
/* to create MAX  array */

function heap_root(input, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && input[left] > input[max]) {
    max = left;
  }

  if (right < array_length && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    heap_root(input, max);
  }
}

function swap(input, index_A, index_B) {
  var temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}

function heapSort(input) {
  array_length = input.length;

  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(input, i);
  }

  for (i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    array_length--;

    heap_root(input, 0);
  }
}

const test = () => {
  let scoville = [1, 2, 2, 7, 9, 10, 12, 1];
  let k = 7;
  let answer = 0;
  let i = 0;
  while (scoville.some(t => t < k)) {
    heapSort(scoville);
    // scoville.sort((a, b) => {
    //   return a < b ? -1 : a > b ? 1 : 0;
    // });
    console.log(scoville);
    let sum = scoville[0] + scoville[1] * 2;
    scoville.shift();
    scoville.shift();
    scoville.push(sum);
    i++;
  }
  console.log(scoville);
  console.log(i);
};

const solution = () => {
  let scoville = [1, 2, 2, 7, 9, 10, 12, 1];
  let K = 7;
  let arr = scoville.sort((x, y) => x - y);
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter(x => x < K).length === 0) {
      console.log("모두 크다", cnt);
      return cnt;
    } else {
      arr.sort((x, y) => x - y);
      console.log(arr)
      let num1 = parseInt(arr.splice(0, 1));
      let num2 = parseInt(arr.splice(0, 1));
      let sum = num1 + 2 * num2;
      arr.unshift(sum);
      cnt++;
      console.log(cnt);
    }
  }
};
solution();
