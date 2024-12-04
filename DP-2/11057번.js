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
    const dp = Array.from(Array(n + 1), () => new Array(10).fill(0));
    for(let i = 0; i <= 9; i++) {
        dp[1][i] = 1;
    }

    for(let i = 2; i <= n; i++) {
        for(let j = 0; j <= 9; j++) {
            for(let m = 0; m <= j; m++) {
                dp[i][j] += ((dp[i - 1][m]) % 10007);
            }
        }
    }

    let result = 0;
    for(let i = 0; i <= 9; i++) {
        result += dp[n][i];
    }

    console.log((result) % 10007);
});