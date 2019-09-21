const naver01 = () => {
  let email = ["abc.def@x.com", "abc", "abc@defx", "abc@defx.xyz"];
  let answer = 0;
  for (let i = 0; i < email.length; i++) {
    let count = 0;
    let k = email[i];
    let host = k.split(".");
    let name = k.split("@");
    if (
      host[host.length - 1] === "com" ||
      host[host.length - 1] === "net" ||
      host[host.length - 1] === "org"
    ) {
      count++;
    }
    if (name.length === 2 && name[0].length > 0 && name[1].length > 0) {
      count++;
    }
    if (count === 2) {
      answer++;
    }
  }
  return answer;
};
naver01();
