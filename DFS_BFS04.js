let visit = [];
let list = [];
let route = "";
const tickets = [
  ["ICN", "COO"],
  ["COO", "ICN"],
  ["COO", "ICN"]
];
const dfs = (tickets, end, count) => {
  route += end + ",";

  if (count == tickets.length) {
    list.push(route);
    return;
  }

  for (let i = 0; i < tickets.length; i++) {
    let depart = tickets[i][0];
    let desti = tickets[i][1];

    if (end === depart && !visit[i]) {
      visit[i] = true;
      dfs(tickets, desti, count + 1);
      visit[i] = false;
      route = route.substring(0, route.length - 4);
    }
  }
};

const solution = tickets => {
  for (let i = 0; i < tickets.length; i++) {
    let departure = tickets[i][0];
    let destination = tickets[i][1];

    if (departure === "ICN") {
      visit[i] = true;
      route = departure + ",";
      dfs(tickets, destination, 1);
      visit[i] = false;
    }
  }

  list.sort();
  console.log(list);
  let answer = list[0].split(",");
  let sol = [];
  for (let i = 0; i < answer.length - 1; i++) {
    sol.push(answer[i]);
  }
  console.log(sol);
  return sol;
};
solution([
  ["ICN", "AOO"],
  ["AOO", "BOO"],
  ["BOO", "ICN"],
  ["ICN", "AOO"],
  ["ICN", "AOO"]
]);
