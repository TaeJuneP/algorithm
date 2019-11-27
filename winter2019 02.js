const test = () => {
    let n = 3;
    let result = []
    result.push([0])
    for (let i = 1; i < n; i++) {
        let k = [];
        let p = result[i - 1];
        let u = []
        result[i - 1].map(
            item => {
                k.push(item)
            }
        )
        k.push(0)
        for (let q = result[i - 1].length-1; q >= 0; q--) {
            console.log(q)
            if (p[q] === 1) {
                k.push(0)
            } else {
                k.push(1)
            }
        }

        result.push(k)
    }
    console.log(result[n-1])
}
test()