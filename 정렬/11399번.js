const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const p = input[1].split(' ').map(Number);

let sum = 0;
let result = 0;
p.sort((a,  b) => a - b);
p.forEach((t) => {
    sum += t;
    result += sum;
});

console.log(result);