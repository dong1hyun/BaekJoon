const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let n, k;

rl.on('line', (input) => {
    [n, k] = input.split(" ").map(item => +item);
});

rl.on('close', () => {
    const dp = Array.from(Array(k + 1), () => new Array(n + 1).fill(0));
    for(let i = 0; i <= n; i++) {
        dp[1][i] = 1;
    }

    for(let i = 2; i <= k; i++) {
        for(let j = 0; j <= n; j++) {
            for(let m = j; m >= 0; m--) {
                dp[i][j] += (dp[i - 1][m]) % 1000000000;
            }
        }
    }

    console.log((dp[k][n]) % 1000000000);
});