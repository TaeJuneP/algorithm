const kakao = () => {
  let record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
  ];
  let result = [];
  let answer = [];
  let id = [];
  record.map(item => {
    let records = item.split(" ");
    result.push(records);
  });
  for (let j = result.length - 1; j >= 0; j--) {
    if (id[result[j][1]] === undefined) {
      if (result[j][2] !== undefined) id[result[j][1]] = result[j][2];
    }
  }
  result.map(item => {
    let ment = "";
    if (item[0] === "Enter") {
      ment = "들어왔습니다.";
    } else if (item[0] === "Leave") {
      ment = "나갔습니다.";
    }
    if (ment !== "") {
      answer.push(id[item[1]] + "님이 " + ment);
    }
  });
  console.log(answer);
};

kakao();
