const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = +input[0];

const findDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

let result;
for(let i = 1; i < input.length; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);
    if(x1 === x2 && y1 === y2) {
        if(r1 === r2) result = -1;
        else result = 0;
    }
    else {
        const b = Math.max(r1, r2); // 큰 원 반지름
        const s = Math.min(r1, r2); // 작은 원 반지름름
        const distance = findDistance(x1, y1, x2, y2);
        if(distance > r1 + r2) {
            result = 0
        }
        else if(distance === r1 + r2) {
            result = 1;
        }
        else if(distance < r1 + r2 && distance + s > b) {
            result = 2;
        }
        else if(distance + s === b) {
            result = 1;
        }
        else {
            result = 0;
        }
    }

    console.log(result);
}