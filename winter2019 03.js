const test = () => {
    let land = [[1, 4, 8, 10], [5, 5, 5, 5], [10, 10, 10, 10], [10, 10, 10, 20]]
    let height = 3;
    let k = []
    let result = []
    for (let i = 0; i < land[0].length; i++) {
        k.push(false)
    }
    let p = k
    p[0] = true
    console.log(k)
    result.push(p)
    for (let j = 1; j < land.length; j++) {
        result.push(k)
    }
    j = 0;
    // let q=[]
    // q=result
    // result[0][0] = true
    console.log(land)
    console.log(result)
    while (true) {
        for (let i = 0; i < land[j].length; i++) {
            if (result[j][i] === true) {
                if (i < land[j].length - 1) {
                    if (Math.abs(land[j][i] - land[j][i + 1]) < height + 1) {
                        result[j][i + 1] = true
                    }
                }
                if (j < land[j].length - 1) {
                    if (Math.abs(land[j][i] - land[j + 1][i]) < height + 1) {
                        result[j + 1][i] = true
                    }
                }
                if (j > 0) {
                    if (Math.abs(land[j][i] - land[j - 1][i]) < height + 1) {
                        result[j - 1][i] = true

                    }
                }
                if (i > 0) {
                    if (Math.abs(land[j][i] - land[j][i - 1]) < height + 1) {
                        result[j][i - 1] = true
                    }
                }
            }

        }
        j++;

        if (j === land.length) {
            console.log(result)
            return (result)
        }


    }

}
test();