const solution = p => {
  //u와 v로 문자열을 분해하되, u는 더 이상 분할할 수 없는 문자열로 만들어야 한다.
  let answer = "";
  let left = 0,
    right = 0; // 왼쪽 괄호, 오른쪽 괄호 개수를 세기 위한 변수
  let check = false; // 올바른 괄호 문자열인지 판단하기 위한 변수
  if (p.length == 0) return ""; //분할한 문자열이 빈 문자열일 경우 빈 문자열 반환
  for (let i = 0; i < p.length; i++) {
    if (p[i] == "(") left++;
    if (p[i] == ")") right++;
    if (right > left) check = true;
    //오른쪽 괄호 수가 더 커지는 순간 이미 올바른 문자열이 아니기 때문에 check를 해준다
    if (left == right) {
      // 개수가 같아질 때가 균형잡힌 문자열 u가 만들어지는 순간
      if (check == true) {
        //u가 올바른 문자열이 아닐 경우
        answer += "(";
        answer += solution(p.substr(i + 1, p.length - i - 1));
        answer += ")";
        for (let j = 1; j < i; j++) {
          if (p[j] == ")") {
            answer += "(";
          }
          if (p[j] == "(") {
            answer += ")";
          }
        }
        return answer;
      } else {
        //u가 올바른 문자열일 경우
        answer += p.substr(0, i + 1);
        answer += solution(p.substr(i + 1, p.length - i - 1));
        return answer;
      }
    }
  }
};
console.log(solution("()))((()"));
