function solution(stones, k) {
    var answer = 0
    let N = stones.length;
  

    let max = Math.max.apply(null, stones);
    let min = Math.min.apply(null, stones);

    let mid;
    while (max >= min) {
        mid = Math.floor((max + min) / 2);
        console.log(mid, min, max)
        if (isPossible(mid, N, k, JSON.parse(JSON.stringify(stones)))) {
            answer = Math.max(answer, mid);
            min = mid + 1;
        }
        else {
            max = mid - 1;
        }
    }
    console.log(answer)
    return answer;
}
function isPossible(mid, N, k, stones) {
    for (let i = 0; i < N; i++) {
        stones[i] -= mid;
    }
    let check = 0;
    for (let i = 0; i < N; i++) {
        if (stones[i] < 0) {
            check++;
            if (check >= k) {
                return false;
            }
        }
        else {
            check = 0;
        }
    }
    return true;
}

solution([5, 5, 5, 5, 5, 1, 5, 5, 5, 5], 3)