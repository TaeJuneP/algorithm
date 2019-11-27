const test = () => {
    let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
    let banned_id = ["fr*d*", "*rodo", "******", "******"];
    let check = 0;
    let result = [];
    let answer = [];
    var fc = 1;
    let count = 0;
    for (var i = 2; i <= banned_id.length; i++) { fc *= i }

    for (let i = 0; i < banned_id.length; i++) {
        let item = []
        for (let j = 0; j < user_id.length; j++) {
            check = 0;
            for (let k = 0; k < banned_id[i].length; k++) {
                if (banned_id[i][k] === user_id[j][k]) {
                    check++
                } else if (banned_id[i][k] === "*") {
                    check++
                }
                if (check === user_id[j].length && k === (banned_id[i].length - 1)) {
                    item.push(user_id[j])
                }
            }
        }
        result.push(item)
    }
    let sum = allPossibleCases(result.sort())
    // if (answer.indexOf(String(item)) === -1) {
    //     answer.push(String(item))
    // }

    console.log(sum)
    // while (fc > count) {
    //     for (let q = 0; q < result.length; q++) {
    //         for (let p = 0; p < result[q].length; p++) {
    //             let item = []
    //             item[q] = result[q][p]
    //             for (let i = 0; i < result.length; i++) {
    //                 for (let k = 0; k < result[i].length; k++) {
    //                     if (q === i) {
    //                         break;
    //                     }
    //                     else if (item[i] === undefined) {
    //                         console.log(item)
    //                         item[i] = result[i][k]
    //                         break;
    //                     }
    //                 }
    //             }
    //             item.sort();
    //             if (answer.indexOf(String(item)) === -1) {
    //                 answer.push(String(item))
    //             }
    //         }
    //     }
    //     count++
    // }
    // console.log(answer)
    // return (answer.length)
}
function allPossibleCases(arr) {
    if (arr.length == 1) {
        return arr[0];
    } else {
        var result = [];
        var allCasesOfRest = allPossibleCases(arr.slice(1));
        // recur with the rest of array
        for (var i = 0; i < allCasesOfRest.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                result.push(arr[0][j] + allCasesOfRest[i]);
            }
        }
        return result;
    }
}
test()