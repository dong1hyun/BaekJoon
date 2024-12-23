const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const num = [];
for(let i = 1; i <= n; i++) {
    num.push(BigInt(input[i]));
}
num.sort((a, b) => b - a);

let maxCount = 1;
let min = num[0];
let prev = num[0];
let c = 1;
for(let i = 1; i < n; i++) {
    if(prev === num[i]) {
        c++;
    } else {
        c = 1;
    }
    if(c >= maxCount) {
        maxCount = c;
        min = num[i];
    }
    prev = num[i];
}

console.log(min.toString());