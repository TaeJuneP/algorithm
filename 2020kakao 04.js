const test = () => {
    let room_number = [1, 3, 4, 1, 3, 1];
    let k = 10;
    let room = [];
    let result = []
    for (let i = 0; i < k; i++) {
        room.push(false)
    }
    for (let i = 0; i < room_number.length; i++) {
        if (room[room_number[i] - 1] === false) {
            room[room_number[i] - 1] = true
            result.push(room_number[i])
        } else {
            for (let j = room_number[i]; j < k; j++) {
                if (room[j] === false) {
                    room[j] = true
                    result.push(j + 1)
                    break
                }
            }
        }
    }
    return (result)
}
test()