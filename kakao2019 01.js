const test = () => {
  let weak = [1, 3, 4, 9, 10];
  let dist = [3, 5, 7];
  dist.sort((a, b) => {
    return a > b ? -1 : a < b ? 1 : 0;
  });
  console.log(dist);
  for(let i=0; i<weak.length; i++){
      if(weak[i+1]-weak[i]>weak[weak.length-1]-weak[i]){
          
      }
  }

  console.log(result);
};
test();
