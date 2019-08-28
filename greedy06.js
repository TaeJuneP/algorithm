const test = () => {
  let routes = [[-20, 15], [-14, -5], [-18, -13], [-5, -3]];
  routes.sort((a, b) => {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  var camera = -30001;
  var count = 0;

  routes.map(route => {
    if (route[0] > camera) {
      camera = route[1];
      count++;
    }
  });
  console.log(count);
  return count;
};
test();
