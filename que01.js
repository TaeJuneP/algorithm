function solution() {
  let priorities = [3, 1, 2, 3, 5, 2, 2, 1];
  let location = 2;
  var answer = 0;
  let loc = location;
  while (priorities.length > 0) {
    let firstItem = priorities.splice(0, 1)[0];
    if (priorities[0] > firstItem) {
      priorities.push(firstItem);
      loc = loc === 0 ? priorities.length - 1 : loc - 1;
    } else {
      answer += 1;
      if (loc === 0) {
        console.log(answer);
        return answer;
      } else {
        loc = loc - 1;
      }
    }
  }
}
solution1();

function solution1() {
  let priorities = [3, 1, 2, 3, 5, 2, 2, 1];
  let location = 2;
  var answer = 0;
  let max = Math.max(...priorities);
  let loc = location;
  while (priorities.length > 0) {
    let firstItem = priorities.splice(0, 1)[0];
    if (max > firstItem) {
      priorities.push(firstItem);
      loc = loc === 0 ? priorities.length - 1 : loc - 1;
    } else if (max == firstItem) {
      answer += 1;
      if (loc === 0) {
        console.log(answer);
        return answer;
      } else {
        max = Math.max(...priorities);
        loc = loc - 1;
      }
    }
  }
}
function solution2() {
  let answer = 0;
  let priorities = [3, 1, 2, 3, 5, 2, 2, 1];
  let location = 2;
  let tasks = priorities.map((v, i) => ({
    lo: i === location,
    val: v
  }));

  while (true) {
    let cur = tasks.splice(0, 1)[0];
    if (tasks.some(t => t.val > cur.val)) {
      tasks.push(cur);
    } else {
      answer++;
      if (cur.lo) {
          console.log(answer)
        return answer;
      }
    }
  }
}
