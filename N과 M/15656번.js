const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;
let first = true;
let num;
rl.on('line', (input) => {
    if(first) {
        [n, m] = input.trim().split(' ').map(item => +item);
        first = false;
        return;
    }
    num = input.trim().split(' ').map(item => +item);
    num.sort((a, b) => a - b);
});

let arr = [];
let result = "";
const solve = () => {
    if (arr.length === m) {
        arr.forEach(item => result += item + ' ');
        result += '\n'
        return;
    }
    for (let i = 0; i < num.length; i++) {
            arr.push(num[i]);
            solve(y);
            arr.pop();
    }
};

rl.on('close', () => {
    solve();
    console.log(result);
});