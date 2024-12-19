const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = [];
for(let i = 1; i <= n; i++) {
    const v = input[i].split(' ')
    v.push(i);
    arr.push(v);
}
arr.sort((a, b) => a[0] === b[0] ? a[2] - b[2] : +a[0] - +b[0]);

let result = "";
for(let i = 0; i < n; i++) {
    result += arr[i][0] + ' ' + arr[i][1] + '\n';
}
console.log(result);