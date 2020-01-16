const input = ["6 8", "1 2", "2 5", "5 1", "3 4", "4 6", "5 4", "2 4", "2 3"];
let bfsQue = [];
const main = () => {
  let check = input[0].split(" ").map(Number);
  let u = [];
  let arr = new Array(check[0] + 1)
    .fill(0)
    .map(v => new Array().fill(0).map(v => 0));
    
  let dfsVisit = new Array(check[0] + 1).fill(false);

  for (let i = 1; i < input.length; i++) {
    u.push(input[i].split(" ").map(Number));
  }
  for (let i = 0; i < check[1]; i++) {
    u.push([u[i][1], u[i][0]]);
  }

  u.sort((a, b) => {
    return a[0] > b[0]
      ? 1
      : a[0] < b[0]
      ? -1
      : a[0] === b[0]
      ? a[1] >= b[1]
        ? 1
        : -1
      : 0;
  });

  for (let i = 1; i <= check[0]; i++) {
    for (let j = 0; j < u.length; j++) {
      if (u[j][0] === i) arr[i].push(u[j][1]);
    }
  }

  let count = 0;
  for (let i = 1; i <= check[0]; i++) {
    if (!dfsVisit[i]) {
      dfs(arr, i, dfsVisit);
      count++;
    }
  }
  console.log(count);
};

const dfs = (arr, k, v) => {
  v[k] = true;
  for (let i = 0; i < arr[k].length; i++) {
    if (!v[arr[k][i]]) {
      dfs(arr, arr[k][i], v);
    }
  }
};
// const bfs = (arr, k, v) => {
//   bfsQue.push(k);
//   v[k] = true;
//   while (bfsQue.length) {
//     let cut = bfsQue.shift();
//     for (let i = 0; i < arr[cut].length; i++) {
//       if (!v[arr[cut][i]]) {
//         v[arr[cut][i]] = true;
//         bfsQue.push(arr[cut][i]);
//       }
//     }
//   }
// };
main();
