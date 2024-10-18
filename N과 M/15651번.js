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
let result = "";
const solve = () => {
    if (arr.length === m) {
        arr.forEach(item => result += item + ' ');
        result += '\n'
        return;
    }
    for (let i = 1; i <= n; i++) {
        arr.push(i);
        solve();
        arr.pop();
    }
};

rl.on('close', () => {
    solve();
    console.log(result);
});