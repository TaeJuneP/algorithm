const test = () => {
  let tickets = [
    ["ICN", "COO"],
    ["ICN", "BOO"],
    ["COO", "ICN"],
    ["BOO", "DOO"]
  ];
  let answer = [];
  let visit = new Array(tickets.length + 1).fill(false);
  tickets.sort((a, b) => {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  console.log(tickets);
  dfs("ICN", tickets, visit, answer);
  console.log(answer);
  console.log(visit);

  for (let i = 0; i < tickets.length; i++) {
    if (!visit[i]) {
      console.log(i);
      console.log(tickets[i]);
      dfs(tickets[i][0], tickets, visit, answer);
    }
  }
  return answer;
};
const dfs = (from, tickets, visit, answer) => {
  answer.push(from);
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] == from && visit[i] == false) {
      visit[i] = true;
      dfs(tickets[i][1], tickets, visit, answer);
      return;
    }
  }
};

test();
