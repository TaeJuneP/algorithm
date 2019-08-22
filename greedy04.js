const test = () => {
  let people = [40, 40, 40];
  let limit = 100;
  let bot = [];
  let sum = 0;
  let count = 0;
  people.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  for (let i = 0; i < people.length; i++) {
    if (bot.length > 0) {
      for (var j = 0; j < bot.length; j++) {
        sum += bot[j];
      }

      if (sum + people[i] > limit) {
        bot = [];
        sum = 0;
        bot.push(people[i]);
        count++;
      } else bot.push(people[i]);
    } else {
      bot.push(people[i]);
      count++;
    }
  }
  console.log(count);
  return count;
};
const test1 = () => {
  let people = [40, 40, 40];
  let limit = 100;
  people.sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  let answer = 0;
  let index = people.length - 1;
  for (let i = 0; i <= index; i++, answer++)
    while (index > i && people[i] + people[index--] > limit) answer++;
  console.log(answer)
  return answer;
};
test1();
