const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, s;
let arr;
let first = true;
let count = 0;
rl.on('line', (input) => {
    if(first) {
        [n, s] = input.trim().split(' ').map(item => +item);
        first = false;
        return;
    }
    arr = input.trim().split(' ').map(item => +item);
});

let p = [];
const solve = (start, c) => {
    
}

rl.on('close', () => {
    solve(0, 0);
    console.log(count);
});