const input = ["1000 1 1000", "999 1000"];
let stack = [];
let que = [];
let bfsQue = [];
const main = () => {
  let check = input[0].split(" ").map(Number);
  let u = [];
  let dfsResult = "";
  let bfsResult = "";
  let arr = new Array(check[0] + 1)
    .fill(0)
    .map(v => new Array().fill(0).map(v => 0));
  let dfsVisit = new Array(check[0] + 1).fill(false);
  let bfsVisit = new Array(check[0] + 1).fill(false);
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
  for (let i = 1; i < check[0] + 1; i++) {
    for (let j = 0; j < u.length; j++) {
      if (u[j][0] === i) arr[i].push(u[j][1]);
    }
  }
  stack.push(check[2]);
  dfsVisit[check[2]] = true;
  dfs(arr, check[2], dfsVisit);
  bfs(arr, check[2], bfsVisit);
  for (let i = 0; i < stack.length; i++) {
    if (i !== stack.lenght - 1) {
      dfsResult += stack[i] + " ";
      bfsResult += que[i] + " ";
    } else {
      dfsResult += stack[i];
      bfsResult += que[i];
    }
  }
  console.log(dfsResult);
  console.log(bfsResult);
};

const dfs = (arr, k, v) => {
  for (let i = 0; i < arr[k].length; i++) {
    if (!v[arr[k][i]]) {
      v[arr[k][i]] = true;
      stack.push(arr[k][i]);
      dfs(arr, arr[k][i], v);
    }
  }
};

const bfs = (arr, k, v) => {
  bfsQue.push(k);
  que.push(k);
  v[k] = true;
  while (bfsQue.length) {
    let cut = bfsQue.shift();
    for (let i = 0; i < arr[cut].length; i++) {
      if (!v[arr[cut][i]]) {
        v[arr[cut][i]] = true;
        bfsQue.push(arr[cut][i]);
        que.push(arr[cut][i]);
      }
    }
  }
};

main();
let stack = [];
let que = [];
let bfsQue = [];
let input = [];
var require = require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function(line) {
    input.push(line.trim());
  })
  .on("close", function() {
    let check = input[0].split(" ").map(Number);
    let u = [];
    let dfsResult = "";
    let bfsResult = "";
    let arr = new Array(check[0] + 1)
      .fill(0)
      .map(v => new Array().fill(0).map(v => 0));
    let dfsVisit = new Array(check[0] + 1).fill(false);
    let bfsVisit = new Array(check[0] + 1).fill(false);
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
    for (let i = 1; i < check[0] + 1; i++) {
      for (let j = 0; j < u.length; j++) {
        if (u[j][0] === i) arr[i].push(u[j][1]);
      }
    }
    stack.push(check[2]);
    dfsVisit[check[2]] = true;
    dfs(arr, check[2], dfsVisit);
    bfs(arr, check[2], bfsVisit);
    for (let i = 0; i < stack.length; i++) {
      if (i !== stack.lenght - 1) {
        dfsResult += stack[i] + " ";
        bfsResult += que[i] + " ";
      } else {
        dfsResult += stack[i];
        bfsResult += que[i];
      }
    }
    console.log(dfsResult);
    console.log(bfsResult);
  });

const dfs = (arr, k, v) => {
  for (let i = 0; i < arr[k].length; i++) {
    if (!v[arr[k][i]]) {
      v[arr[k][i]] = true;
      stack.push(arr[k][i]);
      dfs(arr, arr[k][i], v);
    }
  }
};

const bfs = (arr, k, v) => {
  bfsQue.push(k);
  que.push(k);
  v[k] = true;
  while (bfsQue.length) {
    let cut = bfsQue.shift();
    for (let i = 0; i < arr[cut].length; i++) {
      if (!v[arr[cut][i]]) {
        v[arr[cut][i]] = true;
        bfsQue.push(arr[cut][i]);
        que.push(arr[cut][i]);
      }
    }
  }
};
