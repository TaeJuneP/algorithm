const test = () => {
    const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "asd"];
    const n = 3;
    const array = Array(n).fill(null).map(() => Array());
    for (let i = 0; i < words.length; i++) {
        if (words.indexOf(words[i]) !== i) {
            const p = Math.ceil((i + 1) / n)
            let k = ((i + 1) - (Math.floor((i + 1) / n) * n));
            if (k === 0) {
                k = n
            }
            return ([k, p])
        }
    }
    let count = 1;
    array[0].push(words[0])
    for (let i = 1; i < words.length; i++) {
        if (words[i - 1][words[i - 1].length - 1] === words[i][0]) {
            array[count].push(words[i])
        }
        else {
            return (count + 1, Math.ceil((i + 1) / n))
        }
        count++;
        if (count === n) {
            count = 0
        }
    }
    return [0, 0]
}
test()