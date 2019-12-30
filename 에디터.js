let input = [];
let require = require("readline")
      .createInterface(process.stdin, process.stdout)
      .on("line", function(line) {
        input.push(line.trim());
      })
      .on("close", function() {

    const inputLength = input.length;
    const wordLength = input[0].length;
    let left = [];
    let right = [];

    for (let i = 0; i < wordLength; i++) {
          left.push(input[0][i]);
    }

    for (let i = 2; i < inputLength; i++) {
          if (input[i][0] === "L") {
            if (left.length) {
                  right.push(left.pop());
            }
          } 
        else if (input[i][0] === "D") {
            if (right.length) {
                  left.push(right.pop());
            }
          } 
        else if (input[i][0] === "B") {
            if (left.length) {
                  left.pop();
            }
          } 
        else if (input[i][0] === "P") {
            left.push(input[i][2]);
          }
    }

    while (right.length) {
          left.push(right.pop());
    }

    console.log(left.join(""));
  });