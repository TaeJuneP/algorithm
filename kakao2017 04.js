const kakao04 = () => {
  let m = 6;
  let n = 6;
  let board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];
  let result = [];
  let f = "";
  let p = 0;
  let fin = "F";
  for (let j = 0; j < n; j++) {
    f += "F";
  }
  while (true) {
    fin = "F";
    result = [];
    for (let i = 0; i < m; i++) {
      result.push(f);
    }
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] === board[i - 1][j - 1] &&
          board[i][j] === board[i - 1][j] &&
          board[i][j] === board[i][j - 1] &&
          board[i][j] !== "0"
        ) {
          console.log(board[i][j]);
          result[i - 1] =
            result[i - 1].substr(0, j - 1) + "T" + result[i - 1].substr(j);
          result[i - 1] =
            result[i - 1].substr(0, j) + "T" + result[i - 1].substr(j + 1);
          result[i] =
            result[i].substr(0, j - 1) + "T" + result[i - 1].substr(j);
          result[i] =
            result[i].substr(0, j) + "T" + result[i - 1].substr(j + 1);
          fin = "T";
        }
      }
    }

    if (fin === "F") {
        console.log(result);
        console.log(board);
      return p;
    }
    for (let i = 1; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (result[i][j] === "T") {
          board[i] =
            board[i].substr(0, j) + board[i - 1][j] + board[i].substr(j + 1);
          board[i - 1] =
            board[i - 1].substr(0, j) + 0 + board[i - 1].substr(j + 1);
          p++;
        }
      }
    }
  }
};
kakao04();
