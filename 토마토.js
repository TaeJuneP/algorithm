const input = ["2 2", "1 -1", "-1 1"];
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let queue = [];
let map = [];
let max = 0;
const main = () => {

  let p = input[0].split(" ").map(Number);

  for (let i = 1; i <= p[1]; i++) {
    map.push(input[i].split(" ").map(Number));
  }

  for (let i = 0; i < p[1]; i++) {
    for (let j = 0; j < p[0]; j++) {
      if (map[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  bfs(queue, p);

  for (let i = 0; i < p[1]; i++) {
    for (let j = 0; j < p[0]; j++) {
      if (map[i][j] === 0) {
        return console.log(-1);
      }
      if (max < map[i][j]) {
        max = map[i][j];
      }
    }
  }
  console.log(max - 1);
};

const bfs = (q, p) => {
  while (q.length) {
    let cut = q.shift();
    let x = cut[0];
    let y = cut[1];
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && nx < p[1] && 0 <= ny && ny < p[0]) {
        if (map[nx][ny] == 0 || map[nx][ny] > map[x][y] + 1) {
          q.push([nx, ny]);
          map[nx][ny] = map[x][y] + 1;
        }
      }
    }
  }
};
main();
