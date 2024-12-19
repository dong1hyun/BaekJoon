const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = [];

for(let i = 1; i <= n; i++) {
    arr.push(+input[i]);
}

arr.sort((a, b) => b - a);
let max = 0;
for(let i = 0; i < n; i++) {
    const min = arr[i];
    const v = i + 1;
    max = Math.max(max, min * v);
}

console.log(max);