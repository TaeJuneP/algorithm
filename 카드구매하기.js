let d = [];
let input = [["4"], ["1 5 6 7"]];
const main = () => {
  let cardArr = input[1][0].split(" ");
  for (let i = 0; i <= input[0]; i++) {
    d.push(0);
  }
  for (let i = 1; i <= input[0]; i++) {
    for (let j = 1; j <= i; j++) {
      d[i] = Math.max(d[i], d[i - j] + Number(cardArr[j - 1]));
    }
  }
  console.log(d[input[0]]);
};
main();
// const main = () => {
//   for (let i = 0; i <= input[0]; i++) {
//     d.push(0);
//   }
//   let cardArr = input[1][0].split(" ");
//   sellingCard(input[0], cardArr);
//   console.log(d);
// };
// const sellingCard = (n, k) => {
//   if (d[n] > 0) {
//     return d[n];
//   }
//   for (let i = 1; i <= n; i++) {
//     d[n] = Math.max(d[n], sellingCard(n - i, k) + Number(k[i - 1]));
//   }
//   return d[n];
// };

// main();
// //   for (let i = 1; i <= input[0]; i++) {
// //     for (let j = 1; j <= i; j++) {
// //       d[i] = Math.max(d[i], d[i - j] + input[1][j - 1]);
// //     }
// //   }

// // let d = [];
// // let input = [];
// // let require = require("readline")
// //   .createInterface(process.stdin, process.stdout)
// //   .on("line", function(line) {
// //     input.push(line.trim());
// //   })
// //   .on("close", function() {
// //     for (let i = 0; i <= input[0]; i++) {
// //       d.push(0);
// //     }
// //     for (let i = 1; i <= input[0]; i++) {
// //       for (let j = 1; j <= i; j++) {
// //         d[i] = Math.max(d[i], d[i - j] + input[1][j - 1]);
// //       }
// //     }
// //     console.log(d[input[0] - 1]);
// //   });
