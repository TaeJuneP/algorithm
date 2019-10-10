const winter01 = () => {
  let skill = "CBD";
  let skill_trees = ["BACDE", "CBADF", "AECB", "BDA", "CD", "DBC","CBBAA"];
  let result = [];
  let count = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    result.push([]);
  }
  for (let i = 0; i < skill.length; i++) {
    for (let j = 0; j < skill_trees.length; j++) {
      for (let k = 0; k < skill_trees[j].length; k++) {
        if (skill[i] === skill_trees[j][k]) {
          result[j][i] = k;
          if (i > 0) {
            if (result[j][i - 1] > k || result[j][i - 1] === undefined) {
              skill_trees[j] = "";
              result[j] = [];
              break;
            }
          }
        }
      }
    }
  }
  result.map(item => {
    if (item.length > 0) {
      count++;
    }
  });
  console.log(count);
};
winter01();
