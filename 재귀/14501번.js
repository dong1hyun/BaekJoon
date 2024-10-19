const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let first = true;
let arr = [];
let max = 0;
rl.on('line', (input) => {
    if(first) {
        n = +input;
        first = false;
        return;
    }    
    arr.push(input.trim().split(' ').map(item => +item));
});

const solve = (d, v) => {
    if(d === n) {
        max = Math.max(max, v);
        return;
    }
    solve(d + 1, v)
    if(d + arr[d][0] <= n) {
        solve(d + arr[d][0], v + arr[d][1])
    }
};

rl.on('close', () => {
    solve(0, 0);
    console.log(max);
});