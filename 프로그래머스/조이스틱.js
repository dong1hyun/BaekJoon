const alphabet = {
    'A': 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "E": 4,
    "F": 5,
    "G": 6,
    "H": 7,
    "I": 8,
    "J": 9,
    "K": 10,
    "L": 11,
    "M": 12,
    "N": 13,
    "O": 12,
    "P": 11,
    "Q": 10,
    "R": 9,
    "S": 8,
    "T": 7,
    "U": 6,
    "V": 5,
    "W": 4,
    "X": 3,
    "Y": 2,
    "Z": 1
}

function solution(name) {
    let changeCount = 0;
    const length = name.length;

    let start = -1;
    const changeList = [];
    for (let i = 0; i < length; i++) {
        if (name[i] !== 'A' && start === -1) {
            start = i;
        }
        if (start !== -1 && (i + 1 === length || name[i + 1] === 'A')) {
            changeList.push([start, i]);
            start = -1;
        }
    }
    for (let i = 0; i < length; i++) {
        changeCount += alphabet[name[i]];
    }
    let moveCount = Number.MAX_SAFE_INTEGER;
    const front = changeList[0];
    const rear = changeList[changeList.length - 1];
    if (changeList.length === 0) return 0;
    else if (changeList.length === 1) {
        moveCount = front[1];
        moveCount = Math.min(moveCount, length - front[0]);
    }
    else {
        moveCount = rear[1];
        moveCount = Math.min(moveCount, length - front[0]);
        moveCount = Math.min(moveCount, front[1] * 2 + length - changeList[1][0]);
        moveCount = Math.min(moveCount, (length - rear[0]) * 2 + changeList[changeList.length - 2][1]);
    }

    return changeCount + moveCount;
}