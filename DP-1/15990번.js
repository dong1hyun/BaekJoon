const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let n;
const arr = [];
const MAX = 100001
const dp = Array.from({ length: MAX + 1 }, () => [0, 0, 0]);
dp[1] = [1, 0, 0];
dp[2] = [0, 1, 0];
dp[3] = [1, 1, 1];

rl.on('line', (input) => {
    if(first) {
        n = +input;
        first = false;
        return;
    }
    arr.push(+input);
});

rl.on('close', () => {
    for(let i = 4; i <= MAX; i++) {
        dp[i][0] = (dp[i - 1][1] + dp[i - 1][2]) % 1000000009;
        dp[i][1] = (dp[i - 2][0] + dp[i - 2][2]) % 1000000009;
        dp[i][2] = (dp[i - 3][0] + dp[i - 3][1]) % 1000000009;
    }

    arr.forEach((item) => {
        console.log((dp[item][0] + dp[item][1] + dp[item][2]) % 1000000009);
    });
});