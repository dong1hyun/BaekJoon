const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
const dp = [];
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;
dp[4] = 5;
dp[5] = 8;
rl.on('line', (input) => {
    n = +input;
});

rl.on('close', () => {
    for(let i = 6; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
    }

    console.log(dp[n]);
});