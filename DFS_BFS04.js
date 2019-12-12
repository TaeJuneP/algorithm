// // const test = () => {
// //   let tickets = [
// //     ["ICN", "COO"],
// //     ["ICN", "BOO"],
// //     ["COO", "ICN"],
// //     ["BOO", "DOO"]
// //   ];
// //   let answer = [];
// //   let visit = new Array(tickets.length + 1).fill(false);
// //   tickets.sort((a, b) => {
// //     return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
// //   });
// //   dfs("ICN", tickets, visit, answer);
// //   for (let i = 0; i < tickets.length; i++) {
// //     if (!visit[i]) {
// //       console.log(i);
// //       console.log(tickets[i]);
// //       dfs(tickets[i][0], tickets, visit, answer);
// //     }
// //   }
// //   return answer;
// // };
// // const dfs = (from, tickets, visit, answer) => {
// //   answer.push(from);
// //   for (let i = 0; i < tickets.length; i++) {
// //     if (tickets[i][0] == from && visit[i] == false) {
// //       visit[i] = true;
// //       dfs(tickets[i][1], tickets, visit, answer);
// //       return;
// //     }
// //   }
// // };
// // test();

// // const test1 = () => {
// //   let tickets = [
// //     ["ICN", "COO"],
// //     ["ICN", "BOO"],
// //     ["COO", "ICN"],
// //     ["BOO", "DOO"]
// //   ];
// //   tickets.sort((a, b) => {
// //     return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
// //   });
// //   let answer = [];
// //   answer.push("ICN");
// //   let visit = new Array(tickets.length).fill(false);
// //   console.log(visit);
// //   dfs("ICN", tickets, visit, answer);
// //   console.log(answer);
// // };

// // const dfs = (from, tickets, visit, answer) => {
// //   let start = from;
// //   console.log(start);
// //   for (let i = 0; i < tickets.length; i++) {
// //     if (tickets[i][0] === start && visit[i] === false) {
// //       visit[i] = true;
// //       console.log(start, tickets[i]);
// //       answer.push(tickets[i][1]);
// //       dfs(tickets[i][1], tickets, visit, answer);
// //     }
// //     if (answer.length === tickets.length + 1) {
// //       return answer;
// //     }
// //   }
// // };
// // test1();

// let visit = [];
// let list = [];
// let route = "";
// const test2 = () => {
//   let tickets = [
//     ["ICN", "COO"],
//     ["ICN", "BOO"],
//     ["COO", "ICN"],
//     ["BOO", "DOO"]
//   ];
//   for (let i = 0; i < tickets.length; i++) {
//     let departure = tickets[i][0];
//     let destination = tickets[i][1];

//     if (departure === "ICN") {
//       visit[i] = true;
//       route = departure + ",";
//       dfs(tickets, destination, 1);
//       visit[i] = false;
//     }
//   }

//   list.sort();
//   let answer = list[0].split(",");
//   let sol = [];
//   for (let i = 0; i < answer.length - 1; i++) {
//     sol.push(answer[i]);
//   }
//   return sol;
// };

// dfs = (tickets, end, count) => {
//   route += end + ",";

//   if (count == tickets.length) {
//     list.push(route);
//     return;
//   }

//   for (let i = 0; i < tickets.length; i++) {
//     let depart = tickets[i][0];
//     let desti = tickets[i][1];

//     if (end === depart && !visit[i]) {
//       visit[i] = true;
//       dfs(tickets, desti, count + 1);
//       visit[i] = false;
//       route = route.substring(0, route.length - 4);
//     }
//   }
// };
// test2();

function solution() {
  let tickets = [
    ["ICN", "COO"],
    ["ICN", "BOO"],
    ["COO", "ICN"],
    ["BOO", "DOO"]
  ];
  var answer = [];
  DFS(tickets, "ICN", ["ICN"]);
  // console.log(answer.sort());
  return answer.sort()[0];
  function DFS(t, start, str) {
    console.log("DFS t,start,str : [" + t + "],[" + start + "],[" + str + "]");
    if (t.length == 0) {
      // console.log(str + "\n");
      answer.push(str);
    }
    for (var i in t) {
      if (t[i][0] == start) {
        let tmp = t.slice();
        tmp.splice(i, 1);
        let tmp2 = str.slice();
        tmp2.push(t[i][1]);
        DFS(tmp, t[i][1], tmp2);
      }
    }
  }
}
solution();
