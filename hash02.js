const test = () => {
  phone = ["12","12", "567", "88"];
  phone.sort();
  answer = true;
  for (let i = 0; i < phone.length; i++) {
    for (let j = i+1; j < phone.length; j++) {
      var qqqq = phone[j].split(phone[i]);
      console.log(console.log(qqqq));
      if (qqqq.length > 1) {
        answer = false;
        break;
      }
    }
  }
  console.log(answer);
};
test();
