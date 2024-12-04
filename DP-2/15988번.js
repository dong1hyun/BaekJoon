const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let t;
let arr = [];

rl.on('line', (input) => {
    if(first) {
        t = +input;
        first = false;
        return;
    }
    arr.push(+input);
});

rl.on('close', () => {
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for(let i = 4; i <= 1000000; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
    }

    arr.forEach((item) => {
        console.log(dp[item]);
    })
});