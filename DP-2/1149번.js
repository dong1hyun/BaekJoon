const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let n;
let arr = [];

rl.on('line', (input) => {
    if(first) {
        n = +input;
        first = false;
        return;
    }
    arr.push(input.split(' ').map((item) => +item));
});

rl.on('close', () => {
    const dp = Array.from(Array(n + 1), () => new Array(3).fill(0));
    dp[1][0] = arr[0][0];
    dp[1][1] = arr[0][1];
    dp[1][2] = arr[0][2];

    for(let i = 2; i <= n; i++) {
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i - 1][0];
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i - 1][1];
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i - 1][2];
    }

    const result = Math.min(dp[n][0], dp[n][1], dp[n][2]);
    console.log(result);
});