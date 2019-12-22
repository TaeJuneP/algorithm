const test = () => {
    const example =
        [[4, 4, 4],
        [1, 1, 2, 3],
        [5, 2, 4, 2],
        [3, 1, 3, 5],
        [2, 1, 3, 2],
        [2, 0, 1],
        [3, 1, 3],
        [2, 0, 2],
        [3, 1, 1]];
    for (let i = (example[0][0] + 1); i < example.length; i++) {
        const array = Array(example[0][0]).fill(false).map(() => Array(example[0][1]).fill(false));
        rotateCircle(example[i], example);
        const check = checkNumber(array, example)
        const sum = removeNumber(array, example)
        if (check !== 0) {
            modifyNumber(sum / check, example);
        }
    }
    const answer = sumNumber(example)
    console.log(answer)

}

const rotateCircle = (k, example) => {
    for (let i = k[0]; i < example[0][0] + 1; i = i * k[0]) {
        let p = Array(example[0][0]).fill(null)
        for (let j = 0; j < example[i].length; j++) {
            if (k[1] === 0) {
                let check = j + k[2]
                if (check >= example[i].length) {
                    check -= example[i].length
                }
                p[check] = example[i][j]
            } else {
                let check = j - k[2]
                if (check < 0) {
                    check += example[i].length
                }
                p[check] = example[i][j]
            }
        }
        example[i] = p
    }
}

const checkNumber = (array, example) => {
    let count = 0;
    let numberOfPoint = 0;
    for (let i = 1; i < example[0][0] + 1; i++) {
        for (let j = 0; j < example[i].length; j++) {
            if (example[i][j] !== 0) {
                numberOfPoint++;
                if (i !== example[0][0] && example[i][j] === example[i + 1][j]) {
                    array[i - 1][j] = true;
                    array[i][j] = true;
                    count++;
                } else if (j !== example[i].length - 1 && example[i][j] === example[i][j + 1]) {
                    array[i - 1][j] = true;
                    array[i - 1][j + 1] = true;
                    count++;
                } else if (j === example[i].length - 1 && example[i][j] === example[i][0]) {
                    array[i - 1][j] = true;
                    array[i - 1][0] = true;
                    count++;
                }
            }
        }
    }
    if (count === 0) {
        return numberOfPoint
    } else {
        return 0
    }

}

const removeNumber = (array, example) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === true) {
                example[i + 1][j] = 0;
            } else {
                sum += example[i + 1][j]
            }
        }
    }
    return sum;
}

const sumNumber = (example) => {
    let sum = 0;
    for (let i = 1; i < example[0][0] + 1; i++) {
        for (let j = 0; j < example[i].length; j++) {
            sum += example[i][j]
        }
    }
    return sum;
}

const modifyNumber = (ave, example) => {
    for (let i = 1; i < example[0][0] + 1; i++) {
        for (let j = 0; j < example[i].length; j++) {
            if (example[i][j] !== 0) {
                if (example[i][j] > ave) {
                    example[i][j]--
                } else if (example[i][j] < ave) {
                    example[i][j]++
                }
            }
        }
    }

}
test();