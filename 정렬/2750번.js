const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const num = [];
for(let i = 1; i <= n; i++) {
    num.push(+input[i]);
}

num.sort((a, b) => a - b);

console.log(num.join('\n'));