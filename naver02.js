const naver02 = () => {
  let drum = ["######", ">#*###", "####*#", "#<#>>#", ">#*#*<", "######"];
  let result = [];
  for (let i = 0; i < drum[0].length; i++) {
    let floor = [];
    let count = 0;
    for (let j = 0; j < drum.length; j++) {
      for (let k = i; k < drum[0].length; ) {
        if (drum[j][k] === "<") {
          k--;
        } else if (drum[j][k] === "#") {
          floor.push(k);
          break;
        } else if (drum[j][k] === ">") {
          k++;
        } else if (drum[j][k] === "*") {
          count++;
          break;
        }
      }
      if (count > 1) {
        floor.unshift(false);
        break;
      }
    }
    if (floor[0] !== false) {
      result.push(floor);
    }
  }
  console.log(result);
  return result.length;
};
naver02();
