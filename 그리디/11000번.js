const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const ST = [];

for (let i = 1; i <= n; i++) {
    ST.push(input[i].split(' ').map(Number));
}

ST.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
visited = new Array(n).fill(false);
let sum = 0;
for (let i = 0; i < n; i++) {
    let c = 0;
    for (let j = i + 1; j < n; j++) {
        if (!visited[j]) {
            const end = ST[i][1];
            const start = ST[j][0];
            if (start >= end) {
                visited[j] = true;
                c++;
            }
        }
    }
    sum += c;
}

console.log(n - sum);

// 1 3
// 3 4
// 2 9
// 7 11

// 1 3
// 2 9
// 3 4
// 7 11