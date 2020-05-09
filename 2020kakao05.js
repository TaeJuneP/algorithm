function solution(n, path, order) {
  var answer = true;
  let rooms = Array(n)
    .fill()
    .map(() => Array().fill());
  let visit = Array(n).fill(false);
  let checkVisit = Array(n).fill(false);
  console.log(visit);

  console.log(path[0][0]);
  for (let i = 0; i < path.length; i++) {
    rooms[path[i][0]].push(path[i][1]);
    rooms[path[i][1]].push(path[i][0]);
  }
  console.log(rooms);
  visit[0] = true;
  for (let i = 0; i < rooms[0].length; i++) {
    dfs(rooms[0][i], order, visit, rooms, checkVisit);
  }
  return answer;
}

function dfs(next, order, visit, rooms, checkVisit) {
  visit[next] = true;
  checkVisit[next] = true;
  console.log(next);
  for (let i = 0; i < rooms[next].length; i++) {
    if (!visit[next]) {
      dfs(rooms[next][i], order, visit, rooms, checkVisit);
    }
  }
}

solution(
  9,
  [
    [0, 1],
    [0, 3],
    [0, 7],
    [8, 1],
    [3, 6],
    [1, 2],
    [4, 7],
    [7, 5],
  ],
  [
    [8, 5],
    [6, 7],
    [4, 1],
  ]
);
