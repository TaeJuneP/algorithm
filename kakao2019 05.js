const test = () => {
  let key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]];
  let lock = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
  let rotateKey = [];
  let lockBlock = [];
  let keys = [];
  let lock3;
  lock3 = createTripleSize(lock);
  rotateKey.push(key);
  rotateKeyHandler(rotateKey, key);
  searchLockBlock(lockBlock, lock);
  searchKey(lock3, rotateKey, lock);
  // searchKey(rotateKey, keys);
};

const createTripleSize = lock => {
  let item = Array(lock.length * 3)
    .fill()
    .map(() => Array(lock.length * 3).fill(0));
  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock.length; j++) {
      if (lock[i][j] === 1) {
        item[i + lock.length][j + lock.length] = 1;
      }
    }
  }
  return item;
};

const searchKey = (lock3, rotateKey, lock) => {
  for (let k = 0; k < rotateKey.length; k++) {
    for (let m = 1; m < lock3.length - rotateKey[0].length; m++) {
      for (let n = 1; n < lock3.length - rotateKey[0].length; n++) {
        for (let i = 0; i < rotateKey[0].length; i++) {
          for (let j = 0; j < rotateKey[0].length; j++) {
            lock3[m + i][n + j] += rotateKey[k][i][j];
          }
        }
        for (let q = rotateKey[0].length; q < rotateKey[0].length * 2; q++) {
          for (let w = rotateKey[0].length; w < rotateKey[0].length * 2; w++) {
            if (lock3[q][w] > 1) {
              lock3 = [];
              lock3 = createTripleSize(lock);
              break;
            }
            if (
              q === rotateKey[0].length * 2 - 1 &&
              w === rotateKey[0].length * 2 - 1
            ) {
              console.log(lock3);
              console.log(true);
            }
          }
        }
      }
    }
  }
  console.log(lock3);
};

// const searchKey = (rotateKey, keys) => {
//   for (let i = 0; i < 4; i++) {
//     let col = [];
//     for (let j = 0; j < rotateKey[0].length; j++) {
//       let item = [];
//       for (let k = 0; k < rotateKey[0].length; k++) {
//         if (rotateKey[i][j][k] === 1) {
//           item.push(j, k);
//         }
//       }
//       col.push(item);
//     }
//     keys.push(col);
//   }
// };

const searchLockBlock = (lockBlock, lock) => {
  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock[0].length; j++) {
      if (lock[i][j] === 0) {
        lockBlock.push([i, j]);
      }
    }
  }
};

const rotateKeyHandler = (rotateKey, key) => {
  for (let i = 1; i < 4; i++) {
    let col = [];
    for (let j = 0; j < key.length; j++) {
      let item = [];
      for (let k = key.length - 1; k >= 0; k--) {
        item.push(rotateKey[i - 1][k][j]);
      }
      col.push(item);
    }
    rotateKey.push(col);
  }
};

test();
