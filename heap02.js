const test = () => {
  let stock = 4;
  let dates = [4, 10, 15];
  let supplies = [20, 5, 10];
  let k = 30;
  let answer = 0;
  let index = 0;
  let pd = [];
  for (let i = 0; i < k; i++) {
    for (let j = index; j < dates.length; j++) {
      if (i === dates[j]) {
        pd.push(supplies[j]);
        pd.sort((a, b) => {
          return a > b ? -1 : a < b ? 1 : 0;
        });
        index = j;
      }
    }
    if (stock === 0) {
      stock = pd.shift();
      answer++;
    }
    stock--;
  }
  console.log(answer);
};
test();

// const solution=(stock, dates, supplies, k)=>{
//   let day = 0;
//   let cnt = 0;
//   while(k>0){
//     stock—-;
//     if(day === dates[0]){
//       if (stock-k+supplies[0] < 0 && stock > dates[1]-day){
//         dates.shift();
//         supplies.shift();
//       } else {
//         stock = stock + supplies[0];
//         cnt++;
//         dates.shift();
//         supplies.shift();
//       }
//     }
//     console.log(day,stock,stock-k, dates, supplies);
//     k—;
//     day++;
//   }
//   console.log('cnt',cnt)
//   return cnt;
// }