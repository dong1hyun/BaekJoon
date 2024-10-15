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
let check = [];
const solve = () => {
    if (arr.length === m) {
        let result = "";
        arr.forEach(item => result += item + ' ');
        console.log(result);
    }
    for (let i = 1; i <= n; i++) {
        if (!check[i]) {
            arr.push(i);
            check[i] = true;
            solve();
            arr.pop();
            check[i] = false;
        }
    }
};

rl.on('close', () => {
    solve();
});