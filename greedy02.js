const test = () => {
  let A = 0;
  let Z = 1;
  let B = 1;
  let Y = 2;
  let C = 2;
  let X = 3;
  let D = 3;
  let W = 4;
  let E = 4;
  let V = 5;
  let F = 5;
  let U = 6;
  let G = 6;
  let T = 7;
  let H = 7;
  let S = 8;
  let I = 8;
  let R = 9;
  let J = 9;
  let Q = 10;
  let K = 10;
  let P = 11;
  let L = 11;
  let O = 12;
  let M = 12;
  let N = 13;
  let name = "JJAAAAAAAJN";
  let sum = 0;
  let Aarr = [];
  let length, reverseLength;
  for (let i = 0; i < name.length; i++) {
    sum += eval(name[i]);
    if (name[i] === "A") {
      Aarr.push(i);
    }
  }
  for (let i = 1; i < name.length; i++) {
    if (name[i] !== "A") {
      reverseLength = name.length - i;
      break;
    }
  }

  for (let i = name.length; i > 0; i--) {
    if (name[i] !== "A") {
      length = i;
      break;
    }
  }
  return sum + (length < reverseLength ? length : reverseLength);
  console.log(length, reverseLength);
  console.log(Aarr);
  console.log(sum + name.length - 1);
};

function find_Direction(name, cursor, totalMoved, isVisited) {
  let rightDis = 0;
  let leftDis = 0;
  let nextCursor = 0;
  let total = totalMoved;
  isVisited[cursor] = true;

  for (let i = 1; i < name.length; i++) {
    let newCursor =
      cursor + i > name.length - 1 ? (cursor + i) % name.length : cursor + i;

    if (isVisited[newCursor] == false) {
      if (name[newCursor] !== "A") {
        rightDis = i;
        break;
      }
    }
  }

  for (let i = 1; i < name.length; i++) {
    let newCursor = cursor - i < 0 ? cursor - i + name.length : cursor - i;
    if (isVisited[newCursor] == false) {
      if (name[newCursor] !== "A") {
        leftDis = i;
        break;
      }
    }
  }
  if (rightDis == 0 && leftDis == 0) {
    return total;
  }
  if (rightDis > leftDis) {
    total += leftDis;
    nextCursor =
      cursor - leftDis < 0 ? cursor - leftDis + name.length : cursor - leftDis;
  } else {
    // 같거나 오른쪽으로 이동해야할 때,
    total += rightDis;
    nextCursor = cursor + rightDis;
  }

  return find_Direction(name, nextCursor, total, isVisited);
}

function solution(name) {
  var answer = 0;
  let alphabet = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 12,
    P: 11,
    Q: 10,
    R: 9,
    S: 8,
    T: 7,
    U: 6,
    V: 5,
    W: 4,
    X: 3,
    Y: 2,
    Z: 1
  };

  for (let i of name) {
    answer += alphabet[i];
  }
  let isVisited = [];
  isVisited.length = name.length;
  isVisited.fill(false);

  let cursor = 0;
  let moved = find_Direction(name, cursor, 0, isVisited);

  return answer + moved;
}

console.log(solution("XXAAAAAAAAAAAAAXX"));
