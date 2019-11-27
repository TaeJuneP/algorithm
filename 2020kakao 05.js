const test = () => {
    let stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
    let k = 3;
    let count = 0;
    let jump = 0;
    while (true) {
        for (let i = 0; i < stones.length; i++) {
            if (stones[i] === 0) {
                jump++;
            } else {
                stones[i]--;
                jump = 0;
            }
            if (jump === k) {
                return count;
            }
        }
        count++
    }
}
test();