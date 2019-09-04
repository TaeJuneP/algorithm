function solution() {
  let n = 4;
  let costs = [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]];
  let check = [];
  costs.sort((a, b) => {
    return a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0;
  });
  check[costs[0][0]] = true;
  check[costs[0][1]] = true;
  let answer = costs[0][2];
  let complete = 2;
  while (complete < n) {
    for (let i = 1; i < costs.length; i++) {
      if (
        (check[costs[i][0]] && !check[costs[i][1]]) ||
        (check[costs[i][1]] && !check[costs[i][0]])
      ) {
        check[costs[i][0]] = true;
        check[costs[i][1]] = true;
        complete++;
        answer += costs[i][2];
        break;
      }
    }
  }
  return answer;
}
solution();
