function solution(arr) {
    let answer = 1;
    let checkArr = []
    for (let i = 0; i < arr.length; i++) {
        checkArr.push(Number(arr[i].toString().split('').sort().reverse().join('')))
    }
    checkArr.sort(function (a, b) { return a - b; });

    for (let i = 1; i < checkArr.length; i++) {
        if (checkArr[i] !== checkArr[i - 1]) {
            anwser++
        }
    }
    return answer
}

solution(
    [1]
)