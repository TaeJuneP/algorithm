function solution(weights) {
    var answer = 0;
    let checkArr = []
    let memories = [];
    checkArr = weights
    checkArr.sort(function (a, b) { return a - b; });
    console.log(checkArr)
    while (true) {
        let memory = []
        console.log(memory)
        let flag = false
        for (let i = 0; i < checkArr.length; i++) {
            if (i !== checkArr.length - 1) {
                if (checkArr[i + 1] === checkArr[i]) {
                    memory.push(checkArr[i + 1] + checkArr[i])
                    flag = true;
                    i++;
                }
            }
        }
        if (!flag) {
            if (0 < memories.length) {
                answer = Math.pow(2, memories.length )
                if (weights.indexOf(memories[memories.length - 1][0])) {
                    answer++
                }

            } else {
                answer = 1;
            }
            console.log(answer)
            return answer
        }
        checkArr = memory
        checkArr.sort(function (a, b) { return a - b; });
        memories.push(memory)
    }
}

solution([3, 3, 3, 3, 3, 3, 12])