function solution(reqs) {
    var answer = []
    let createdId = [];
    for (let i = 0; i < reqs.length; i++) {
        const check = reqs[i].split(' ')
        console.log(check)
        console.log(createdId)
        if (check[0] === "DEPOSIT") {
            if (0 < createdId.length) {
                for (let j = 0; j < createdId.length; j++) {
                    if (createdId[j][0] === check[1]) {
                        createdId[j][1] += Number(check[2])
                        answer.push(200)
                        break;
                    } else {
                        if (j === createdId.length - 1) {
                            answer.push(404)
                        }
                    }
                }
            } else {
                answer.push(404)
            }
        } else if (check[0] === "WITHDRAW") {
            if (0 < createdId.length) {
                for (let j = 0; j < createdId.length; j++) {
                    if (createdId[j][0] === check[1]) {
                        if (0 < createdId[j][1] - Number(check[2])) {
                            createdId[j][1] -= Number(check[2])
                            answer.push(200)
                        } else {
                            answer.push(403)
                        }
                        break;
                    } else {
                        if (j === createdId.length - 1) {
                            answer.push(404)
                        }
                    }
                }
            }
            else {
                answer.push(404)
            }
        } else if (check[0] === "CREATE") {
            if (0 < createdId.length) {
                for (let j = 0; j < createdId.length; j++) {
                    if (createdId[j][0] === check[1]) {
                        answer.push(403)
                        break;
                    } else {
                        if (j === createdId.length - 1) {
                            createdId.push([check[1], Number(check[2])])
                            answer.push(200)
                            break;
                        }
                    }
                }
            } else {
                createdId.push([check[1], Number(check[2])])
                answer.push(200)
            }
        }
    }
    console.log(createdId)
    console.log(answer)
    return answer;
}

solution(["CREATE 3a 10000", "CREATE 3a 20000", "CREATE 2bw 30000"])