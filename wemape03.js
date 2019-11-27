const test = () => {
    let result = [];

    for (let i = 1; i < 10000; i++) {
        let check = true
        for (let j = 0; j < String(i).length; j++) {
            if (String(i)[j] === "0") {
                check = false
                break
            }
        }
        if (check === true) {
            result.push(String(i))
        }
    }
    result.sort((a, b) => {
        return a < b ? -1 : a > b ? 1 : 0;
    });
    console.log(result.indexOf("9999"))
    console.log(result)
}
test()