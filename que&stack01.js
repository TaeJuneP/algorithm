function solution() {
  let answer = 0;
  let priorities = [1,1,1,9,1,1,1];
  let location = 2;
  let tasks = priorities.map(
    (v, i) => (
      {
        lo: i === location,
        val: v
      }
    )
  );

  while (true) {
    let cur = tasks.splice(0, 1)[0];
    if (tasks.some(t => t.val > cur.val)) {
      tasks.push(cur);
    } else {
      answer++;
      if (cur.lo){ 
      return answer;
      }
    }
  }
}
solution();
