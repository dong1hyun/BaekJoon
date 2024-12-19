const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const t = [];
for(let i = 0; i < 9; i++) {
    t.push(+input[i]);
}

t.sort((a, b) => a - b);
const genuine = [];
let flag = false;
const solve = (s, c, start) => {
    if(c === 7) {
        if(s === 100) {
            flag = true;
            return;
        }
    }
    for(let i = start; i < 9; i++) {
        genuine.push(t[i]);
        solve(s + t[i], c + 1, i + 1);
        if(flag) return;
        genuine.pop();
    }
}

solve(0, 0, 0);

console.log(genuine.join('\n'));