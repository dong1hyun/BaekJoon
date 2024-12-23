const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const d = input[1].split(' ').map(Number);
let p = input[2].split(' ').map(Number);
const p_index = {};
let rd = new Array(d.length).fill(0);
rd[n - 2] = d[n - 2];
for(let i = n - 3; i >= 0; i--) {
    rd[i] += (rd[i + 1] + d[i]);
}
p = p.splice(0, n - 1);
for(let i = n - 2; i >= 0; i--) {
    p_index[`${p[i]}`] = i;
}
p.sort((a, b) => a - b);
let min = p[0];
let c = p_index[`${min}`];
let di = BigInt(rd[c]);
let pc = di * BigInt(min);
for (let i = 1; i < n; i++) {
    if(c === 0) break;
    min = p[i];
    const index = p_index[`${min}`];
    if(index < c) {
        di = BigInt((rd[index] - rd[c]) * min);
        pc += di;
        c = index;
    }
}

console.log(pc.toString());