const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;

rl.on('line', (input) => {
    n = +input;
});

rl.on('close', () => {
    const dp = Array.from(Array(n + 1), () => new Array(3).fill(0));
    dp[1][0] = 1;
    dp[1][1] = 1;
    dp[1][2] = 1;

    for(let i = 2; i <= n; i++) {
        dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
        dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
        dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
    }

    console.log((dp[n][0] + dp[n][1] + dp[n][2]) % 9901);
});