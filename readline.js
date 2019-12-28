var fs = require("fs");

var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ");

var result1 = input[0]; // 이 변수에 "사과" 가 들어간다.

var result2 = input[1]; // 이 변수에 "토마토" 가 들어간다.

var result3 = input[2]; // 이 변수에 "수박" 가 들어간다.
