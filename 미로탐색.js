const input = [
  "2 25",
  "1011101110111011101110111",
  "1110111011101110111011101"
];
let map = [];
let queue = [];
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];
const main = () => {
  let p = input[0].split(" ").map(Number);
  for (let i = 1; i < input.length; i++) {
    map.push(input[i].split("").map(Number));
  }
  let bfsVisit = new Array(p[0])
    .fill(false)
    .map(v => new Array(p[1]).fill(false).map(v => false));

  bfsVisit[0][0] = true;
  queue.push([0, 0]);
  bfs(queue, bfsVisit, p);
  console.log(map[p[0] - 1][p[1] - 1]);
};

const bfs = (q, v, p) => {
  console.log(p);
  while (q.length) {
    let cut = q.shift();
    let x = cut[0];
    let y = cut[1];
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (0 <= nx && nx < p[0] && 0 <= ny && ny < p[1]) {
        if (v[nx][ny] === false && map[nx][ny] !== 0) {
          q.push([nx, ny]);
          map[nx][ny] = map[x][y] + 1;
          v[nx][ny] = true;
        }
      }
    }
  }
};
main();
