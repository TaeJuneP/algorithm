const test = () => {
  phone = ["12", "123", "1235", "567", "88"];
  phone.sort();
  answer = true;
  for (let i = 0; i < phone.length; i++) {
    for (let j = 1; j < phone.length; j++) {
      var qqqq = phone[j].split(phone[i]);
      console.log(console.log(qqqq));
      if (qqqq.length > 1) {
        answer = false;
        continue;
      }
    }
  }
  console.log(answer);
};
test();
