const test = () => {
    const food_times = [3, 5, 1, 6, 5, 3]
    let k = 3;
    let array = []
    let count = 0
    food_times.forEach((item, i) => {
        array.push([item, i + 1])
    })
    array.sort((a, b) => {
        return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0
    })
    for (let i = 0; i < array.length; i++) {
        if (count < array[i][0]) {
            let p = array[i][0] - count
            count = array[i][0]
            let sum = p * (array.length - i);
            if (k >= sum) {
                k -= sum
            } else {
                const turn = k % (array.length - i)
                let result = array.slice(i)
                result.sort((a, b) => {
                    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
                })
                console.log(result[turn][1])
                return (result[turn][1])
            }
        }
    }
    return -1
}
test()