function solution(numbers, hand) {
  var answer = "";
  let l = [3, 0];
  let r = [3, 2];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
      answer += "L";
      l = [0, 0];
    } else if (numbers[i] === 4) {
      answer += "L";
      l = [1, 0];
    } else if (numbers[i] === 7) {
      answer += "L";
      l = [2, 0];
    } else if (numbers[i] === 3) {
      answer += "R";
      r = [0, 2];
    } else if (numbers[i] === 6) {
      answer += "R";
      r = [1, 2];
    } else if (numbers[i] === 9) {
      answer += "R";
      r = [2, 2];
    } else if (numbers[i] === 2) {
      let xr = Math.abs(0 - r[0]) + Math.abs(1 - r[1]);
      let xl = Math.abs(0 - l[0]) + Math.abs(1 - l[1]);
      if (xr > xl) {
        l = [0, 1];
        answer += "L";
      } else if (xr === xl) {
        if (hand === "right") {
          r = [0, 1];
          answer += "R";
        } else {
          l = [0, 1];
          answer += "L";
        }
      } else {
        r = [0, 1];
        answer += "R";
      }
    } else if (numbers[i] === 5) {
      let xr = Math.abs(1 - r[0]) + Math.abs(1 - r[1]);
      let xl = Math.abs(1 - l[0]) + Math.abs(1 - l[1]);
      if (xr > xl) {
        l = [1, 1];
        answer += "L";
      } else if (xr === xl) {
        if (hand === "right") {
          r = [1, 1];
          answer += "R";
        } else {
          l = [1, 1];
          answer += "L";
        }
      } else {
        r = [1, 1];
        answer += "R";
      }
    } else if (numbers[i] === 8) {
      let xr = Math.abs(2 - r[0]) + Math.abs(1 - r[1]);
      let xl = Math.abs(2 - l[0]) + Math.abs(1 - l[1]);
      if (xr > xl) {
        l = [2, 1];
        answer += "L";
      } else if (xr === xl) {
        if (hand === "right") {
          r = [2, 1];
          answer += "R";
        } else {
          l = [2, 1];
          answer += "L";
        }
      } else {
        r = [2, 1];
        answer += "R";
      }
    } else if (numbers[i] === 0) {
      let xr = Math.abs(3 - r[0]) + Math.abs(1 - r[1]);
      let xl = Math.abs(3 - l[0]) + Math.abs(1 - l[1]);
      if (xr > xl) {
        l = [3, 1];
        answer += "L";
      } else if (xr === xl) {
        if (hand === "right") {
          r = [3, 1];
          answer += "R";
        } else {
          l = [3, 1];
          answer += "L";
        }
      } else {
        r = [3, 1];
        answer += "R";
      }
    }
  }
  return answer;
}


("LRLLLRLLRRL");
solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
