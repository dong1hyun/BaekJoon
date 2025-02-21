const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let tc = +input[0];

for(let t = 1; t < tc + 1; t++) {
    const [n, m] = input[t].split(' ').map(Number);

    let v = 1n;
    for(let i = m; i > m - n; i--) {
        v *= BigInt(i);
    };
    for(let i = n; i > 1; i--) {
        v /= BigInt(i);
    };

    console.log(Number(v));
}