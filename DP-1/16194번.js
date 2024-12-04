const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let n;
let p;
let dp = [];

rl.on('line', (input) => {
    if (first) {
        n = +input;
        first = false;
        return;
    }
    p = input.split(' ').map((item) => +item);
});

rl.on('close', () => {
    dp[1] = p[0];
    for (let i = 2; i <= n; i++) {
        let min = p[i - 1];
        for (let j = i - 1; j >= Math.floor(i / 2); j--) {
            min = Math.min(min, dp[i - j] + dp[j]);
        }
        dp[i] = min;
    }

    console.log(dp[n]);
});