const test = () => {
    let result = 0;
    let limit = 300
    let people = [58, 70, 54, 85, 99, 125, 100, 75, 76, 80, 88, 75]
    people.sort((a, b) => {
        return a < b ? -1 : a > b ? 1 : 0;
    });
    let count = 0;
    for (let i = 0; i < people.length; i++) {
        if (count + people[i] <= limit) {
            count = count + people[i];
            people[i] = 0;
        }
        else if (count + people[i] > limit) {
            result++;
            count = 0;
            i--;

        }
    }
    if (count != 0) {
        result++;
    }
    console.log(result);

}
test()