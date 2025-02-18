const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = +input[0];

let start = 1;
let end;
for(let i = 0; i < tc; i++) {
    const [n, k] = input[start].split(' ').map(Number);
    const time = input[start + 1].split(' ').map(Number);
    end = start + k + 2;
    const goal = +input[end];
    const order = input.slice(start + 2, end).map((item) => item.split(' ').map(Number));
    start = end + 1;
    
}