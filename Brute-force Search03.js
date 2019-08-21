function solution(baseball) {
  var answer = 0;
  var arr = [];

  for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      if (i != j) {
        for (var k = 1; k < 10; k++) {
          if (i != k && j != k) {
            var check = true;
            for (var l = 0; l < baseball.length; l++) {
              var number = String(baseball[l][0]);
              var a = number.substr(0, 1);
              var b = number.substr(1, 1);
              var c = number.substr(2, 1);

              var strike = 0;
              var ball = 0;
              if (number.indexOf(i) > -1) ball++;
              if (number.indexOf(j) > -1) ball++;
              if (number.indexOf(k) > -1) ball++;

              if (i == a) {
                strike++;
                ball--;
              }
              if (j == b) {
                strike++;
                ball--;
              }
              if (k == c) {
                strike++;
                ball--;
              }
              if (strike != baseball[l][1] || ball != baseball[l][2]) {
                check = false;
                break;
              }
            }
            if (check) {
              answer++;
            }
          }
        }
      }
    }
  }
  return answer;
}
