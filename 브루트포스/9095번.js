const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ar = [];
rl.on('line', (input) => {
    ar.push(+input);
});

let dp = [];
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
rl.on('close', () => {
    for(let i = 4; i <= 12; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    for(let i = 1; i <= ar[0]; i++) {
        console.log(dp[ar[i]]);
    }
});