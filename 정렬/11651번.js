const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const xy = [];
for(let i = 1; i <= n; i++) {
    xy.push(input[i].split(' ').map(Number));    
}

xy.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

let result = "";
for(let i = 0; i < n; i++) {
    result += (xy[i][0] + ' ' + xy[i][1] + '\n');
}

console.log(result);