const input = ["17 8", "2", "2 16"];
const main = () => {
  let base = input[0].split(" ");
  let number = input[2].split(" ");
  let decimal = 0;
  let output = "";
  for (let i = 0; i < input[1]; i++) {
    decimal += Number(number[i]) * Math.pow(Number(base[0]), input[1] - i - 1);
  }
  console.log(decimal);
  while (decimal) {
    output += (decimal % base[1]) + " ";
    decimal = Math.floor(decimal / base[1]);
  }
  console.log(
    output
      .split("")
      .reverse()
      .join("")
      .trim()
  );
};
main();
// let input = [];
// var require = require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", function(line) {
//     input.push(line.trim());
//   })
//   .on("close", function() {
//     let base = input[0].split(" ");
//     let number = input[2].split(" ");
//     let decimal = 0;
//     let output = "";
//     for (let i = 0; i < input[1] - 1; i++) {
//       decimal += Number(number[i]) * Math.pow(Number(base[0]), i + 1);
//     }
//     decimal += Number(number[input[1] - 1]);
//     while (decimal !== 0) {
//       output += (decimal % base[1]) + " ";
//       decimal = Math.floor(decimal / base[1]);
//     }
//     console.log(
//       output
//         .split("")
//         .reverse()
//         .join("")
//         .trim()
//     );
//   });
