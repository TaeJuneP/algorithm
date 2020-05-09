
function findRoom(number, rooms) {
    console.log(rooms)
    if (!rooms.has(number)) {
        rooms.set(number, number + 1);
        return number
    }
    let p = findRoom(rooms.get(number), rooms);
    console.log(p)
    rooms.set(number, p + 1);
    return p;
}

function solution(k, room_number) {
    const answer = [];
    const rooms = new Map();
    let empty;
    let length = room_number.length;

    for (let i = 0; i < length; i++) {
        empty = findRoom(room_number[i], rooms);
        answer.push(empty);
    }
    console.log(answer)
    return answer;
}


solution(10, [1, 3, 4, 1, 3, 1])