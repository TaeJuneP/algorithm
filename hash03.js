const test = () => {
  var answer = 1;
  let clothes = [
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"]
  ];
  let items = {};
  clothes.forEach(item => {
    if (items[item[1]] >= 1) {
      items[item[1]] += 1;
    } else items[item[1]] = 1;
  });
  console.log(items);
  for (var x in items) answer *= items[x] + 1;
  console.log(answer);
  return answer - 1;
};
test();
