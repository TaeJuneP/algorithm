const main = () => {
  const input = ["5000 5000"];
  let rotate = [];
  let answer = "<";
  let m = input[0].split(" ");
  let m1 = Number(m[0]) + 1;
  let k = Number(m[1]);
  for (let i = 1; i < m1; i++) {
    rotate.push(i);
  }
  //   while (rotate.length) {
  //     if (rotate.length === 1) {
  //       answer += rotate.shift() + ">";
  //       break;
  //     }

  //     for (let i = 1; i < k; i++) {
  //       rotate.push(rotate.shift());
  //     }
  //     answer += rotate.shift() + ", ";
  //   }

  let count = 0;
  while (rotate.length) {
    count++;
    if (count === k) {
      answer += rotate.shift();
      if (rotate.length) {
        answer += ", ";
        count = 0;
      } else {
        answer += ">";
      }
    } else {
      rotate.push(rotate.shift());
    }
  }
  console.log(answer);
};
main();

// let input = [];
// arequire("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", function(line) {
//     input.push(line.trim());
//   })
//   .on("close", function() {
//     let rotate = [];
//     let answer = [];
//     for (let i = 1; i < Number(input[0][0]) + 1; i++) {
//       rotate.push(i);
//     }
//     let count = 0;
//     while (rotate.length) {
//       count++;
//       if (count === Number(input[0][2])) {
//         answer.push(rotate.shift());
//         count = 0;
//       } else {
//         rotate.push(rotate.shift());
//       }
//     }
//     console.log(answer);
//   });
let input = [];
var require = require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function(line) {
    input.push(line.trim());
  })
  .on("close", function() {
    let rotate = [];
    let answer = "<";
    let inputSplit = input[0].split(" ");
    let m = Number(inputSplit[0]) + 1;
    let k = Number(inputSplit[1]);
    let count = 0;

    for (let i = 1; i < m; i++) {
      rotate.push(i);
    }
    
    while (rotate.length) {
      count++;
      if (count === k) {
        answer += rotate.shift();
        if (rotate.length) {
          answer += ", ";
          count = 0;
        } else {
          answer += ">";
        }
      } else {
        rotate.push(rotate.shift());
      }
    }

    console.log(answer);
  });
