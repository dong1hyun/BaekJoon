const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x;
let min = Number.MAX_SAFE_INTEGER;
rl.on('line', (input) => {
    x = +input;
});

const solve = (n, c) => {
    if(c > min) return;
    if(n === 1) {
        min = Math.min(c, min);
        return;
    }
    if(n % 3 === 0) solve(n / 3, c + 1);
    if(n % 2 === 0) solve(n / 2, c + 1);
    solve(n - 1, c + 1);
}

rl.on('close', () => {
    solve(x, 0);
    console.log(min);
});