const line01 = () => {
  let data = [5, 2];
  let message = [4, 3, 5, 2, 8];
  let result = [];
  let consumer = [];
  let time = 0;
  while (true) {
    for (let i = 0; i < data[1]; i++) {
      if (consumer.length > 0 && consumer.length > i) {
        console.log(consumer);
        if (consumer[i][1] + consumer[i][0] === time) {
          consumer.splice(i, 1);
        }
      }
      if (message.length > 0) {
        if (consumer.length < data[1]) {
          consumer.push([message.shift(), time]);
        }
      }
    }
    if (consumer.length === 0 && message.length === 0) {
      console.log(time);
      break;
    }
    time++;
  }
};
line01();
