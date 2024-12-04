const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
const dp = Array.from(Array(91), () => new Array(2).fill(0));
dp[1][1] = 1;
dp[1][0] = 0;

rl.on('line', (input) => {
    n = +input;
});

rl.on('close', () => {
    for(let i = 2; i <= n; i++) {
        dp[i][0] = BigInt(dp[i - 1][1] + dp[i - 1][0]);
        dp[i][1] = BigInt(dp[i - 1][0]);
    }

    console.log(BigInt(dp[n][0] + dp[n][1]) + "");
});