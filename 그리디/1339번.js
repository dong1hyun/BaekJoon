const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const num = [];
for (let i = 1; i <= n; i++) {
    num.push(input[i]);
}

const count = {};
for (let i = 0; i < n; i++) {
    for (let j = 0; j < num[i].length; j++) {
        const w = num[i][j];
        if (!count[w]) count[w] = 0;
        count[w] += Math.pow(10, num[i].length - j - 1);
    }
}
console.log(
    Object.values(count)
        .sort((a, b) => b - a)
        .reduce((acc, v, i) => {
            acc + v * (9 - i)
        }, 0)
)