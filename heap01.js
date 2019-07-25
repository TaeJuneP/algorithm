const test = () => {
  let scoville = [1,2,2,7, 9, 10, 12];
  let k = 7;
  let answer = 0;
  let i = 0;
  while (scoville.some(t => t < k)) {
    scoville.sort(function(a, b) {
      return a - b;
    });
    let sum = scoville[0] + scoville[1] * 2;
    scoville.shift();
    scoville.shift();
    scoville.push(sum);
    i++;
  }
  console.log(scoville)
  console.log(i);
};
test();
