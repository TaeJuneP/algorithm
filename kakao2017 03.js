const kakao = () => {
  let cacheSize = 3;
  let cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
  let answer = 0;
  let result = [];
  for (let i = 0; i < cities.length; i++) {
    if (result.indexOf(cities[i].toUpperCase()) == -1) {
      answer += 5;
      if (result.length < cacheSize) {
        result.push(cities[i].toUpperCase());
      } else {
        result.shift();
        result.push(cities[i].toUpperCase());
      }
    } else {
      result.splice(result.indexOf(cities[i].toUpperCase()), 1);
      result.push(cities[i].toUpperCase());
      answer += 1;
    }
  }
  console.log(answer)
  return answer;
};
kakao();
