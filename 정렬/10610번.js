const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0];

let zExist = false;
let sum = 0;
for(let i = 0; i < n.length; i++) {
    const v = +n[i];
    if(v === 0) zExist = true;
    sum += v;
}

if(sum % 3 !== 0 || !zExist) console.log(-1);
else {
    newN = n.split('').map(Number);
    newN.sort((a, b) => b - a);
    console.log(newN.join(''));
}