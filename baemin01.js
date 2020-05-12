function solution(arr) {
    let answer = 0
    for (let k = 0; k < 7; k++) {
        let checkArr = [];
        let count = 1;
        if (arr.length === 1) {
            if (checkArr[0] !== 1) {
                answer++
            }
            console.log(answer)
            return answer
        }
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                count++
                if (i === arr.length - 1) {
                    checkArr.push(count)
                }
            } else {
                checkArr.push(count)
                if (i === arr.length - 1) {
                    checkArr.push(count)
                }
                count = 1;
            }
        }
        answer++

        arr = checkArr
    }

}
solution([1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3]);