// const test = () => {
//     let input = 5
//     let night = input - 1
//     let result = []
//     result.push(0)
//     result.push(1)
//     for (let i = 2; i < input; i++) {
//         let k = 0;
//         console.log(i)
//         if (Number.isInteger(i / 2)) {
//             k++
//             k += ((result[i - 1] - 1) * 2)
//             k++
//             result.push(k)
//         } else {
//             k++
//             k += ((result[i - 1] - 1) * 2)
//             result.push(k)
//         }
//     }
//     console.log(result)
// }
// test();
let result = 0;
const test = () => {
    let N = 4
    discount(N - 1);
}
discount = (max) => {
    if (max == 0) {
        result++;
        return;
    }
    else {
        for (let i = 1; i <= 2; i++) {
            if (max - i > -1) {
                discount(max - i);
            }
        }
    }
    return;
}

test()