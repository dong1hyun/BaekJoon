const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let tc = +input[0];

for (let t = 1; t < tc + 1; t++) {
    const [x, y] = input[t].split(' ').map(Number);
    const distance = y - x;
    let count = 1;
    let prev;
    while (true) {
        let v;
        const half = Math.floor(count / 2);
        if (count % 2 === 0) {
            v = prev + half;
        } else {
            v = (half + 1) ** 2;
            prev = v;
        }
        if (v >= distance) {
            console.log(count);
            break;
        }
        count++;
    }
}

1
11
121
1221
12321
123321
1234321
12344321