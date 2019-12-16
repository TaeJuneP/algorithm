const test = () => {
    const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
    const n = 3;
    for (let i = 0; i < words.length; i++) {
        if (words.indexOf(words[i]) !== i) {
            Math.ceil((i + 1) / n)
            console.log((i + 1) - (Math.floor((i + 1) / n)))
            return ((i + 1) / n)
        }
    }
}
test()