const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
const dp = [];
dp[1] = 1;
dp[2] = 3;
dp[3] = 5;
dp[4] = 11;
dp[5] = 21;

rl.on('line', (input) => {
    n = +input;
});

rl.on('close', () => {
    for(let i = 5; i <= n; i++) {
        if(i % 2 === 0) {
            dp[i] = (dp[i - 1] * 2) % 10007 + 1;
        }
        else {
            dp[i] = (dp[i - 1] * 2) % 10007 - 1;
        }
    }
    console.log(dp[n]);
});