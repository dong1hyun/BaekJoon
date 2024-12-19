const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const m = [];

for(let i = 1; i <= n; i++) {
    m.push(input[i].split(' ').map(Number));
}

m.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
let count = 1;
let endTime = m[0][1];

for(let i = 1; i < n; i++) {
    const startTime = m[i][0];
    if(startTime >= endTime) {
        count++;
        endTime = m[i][1];
    }    
}

console.log(count);