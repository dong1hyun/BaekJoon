const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;
rl.on('line', (input) => {
    [n, m] = input.trim().split(' ').map(item => +item);
});

let arr = [];
const solve = (start) => {
    if (arr.length === m) {
        let result = "";
        arr.forEach(item => result += item + ' ');
        console.log(result);
    }
    for (let i = start; i <= n; i++) {
        arr.push(i);
        solve(i + 1);
        arr.pop();
    }
};

rl.on('close', () => {
    solve(1);
});