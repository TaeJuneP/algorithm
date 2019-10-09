const test = () => {
    let numbers = [1, 1, 1, 1, 1];
    let target = 3;
    let answer = 0;
    const solution = (numbers, target) => {
        dfs(target, numbers, 0)
        return answer;
    }

    const dfs = (target, numbers, k) => {
        if (k === numbers.length) {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            if (sum === target)
                answer++
            return;
        }
        else {
            numbers[k] *= 1;
            dfs(target, numbers, k + 1);
            numbers[k] *= -1;
            dfs(target, numbers, k + 1);
        }
    }
    solution(numbers, target)
}
test()