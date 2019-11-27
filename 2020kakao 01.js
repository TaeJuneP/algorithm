const test = () => {
    let board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
    let moves = [1, 5, 3, 5, 1, 2, 1, 4]
    let result = []
    let count = 0
    for (let k = 0; k < moves.length; k++) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][moves[k] - 1] !== 0) {
                result.push(board[i][moves[k] - 1])
                board[i][moves[k] - 1] = 0
                break;
            }
        }
    }
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] === result[i + 1]) {
            result.splice(i, 2)
            i = i - 2
            count = count + 2
        }
    }
    return (count)
}
test();
