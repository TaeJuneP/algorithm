function solution(board) {
  var answer = 0;
  let N = board.length - 1;
  let cost = Array(board.length)
    .fill()
    .map(() => Array(board.length).fill(Number.MAX_VALUE));
  cost[0][0] = 0;
  let direct = -1;
  bfs([0, 0], board, cost, direct);
  answer = cost[N][N];
  return answer;
}

function bfs(arr, board, cost, direct) {
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];
  let x = arr[0];
  let y = arr[1];
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (0 <= nx && nx < board.length && 0 <= ny && ny < board.length) {
      if (board[nx][ny] != 1) {
        if (direct === k) {
          if (cost[x][y] + 100 <= cost[nx][ny]) {
            cost[nx][ny] = cost[x][y] + 100;
            bfs([nx, ny], board, cost, k);
          }
        } else if (direct === -1) {
          if (cost[x][y] + 100 <= cost[nx][ny]) {
            cost[nx][ny] = cost[x][y] + 100;
            bfs([nx, ny], board, cost, k);
          }
        } else {
          if (cost[x][y] + 600 <= cost[nx][ny]) {
            cost[nx][ny] = cost[x][y] + 600;
            bfs([nx, ny], board, cost, k);
          }
        }
      }
    }
  }
}

solution([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
