const test = () => {
  let A = 0;
  let Z = 1;
  let B = 1;
  let Y = 2;
  let C = 2;
  let X = 3;
  let D = 3;
  let W = 4;
  let E = 4;
  let V = 5;
  let F = 5;
  let U = 6;
  let G = 6;
  let T = 7;
  let H = 7;
  let S = 8;
  let I = 8;
  let R = 9;
  let J = 9;
  let Q = 10;
  let K = 10;
  let P = 11;
  let L = 11;
  let O = 12;
  let M = 12;
  let N = 13;
  let name = "JAAAAAAAJN";
  let sum = 0;
  let Aarr = [];
  let length, reverseLength;
  for (let i = 0; i < name.length; i++) {
    sum += eval(name[i]);
    if (name[i] === "A") {
      Aarr.push(i);
    }
  }
  for (let i=1; i < name.length; i++) {
    if (name[i] !== 'A') {
        reverseLength = name.length - i;
        break;
    }
}

for (let i=name.length; i > 0; i--) {
    if (name[i] !== 'A') {
        length = i;
        break;
    }
}
return sum + (length < reverseLength ? length : reverseLength);
console.log(length, reverseLength);
  console.log(Aarr)
  console.log(sum + name.length - 1);
};
test();
