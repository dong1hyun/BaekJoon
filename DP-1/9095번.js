const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let n;
const arr = [];
const dp = [];
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

rl.on('line', (input) => {
    if(first) {
        n = +input;
        first = false;
        return;
    }
    arr.push(+input);
});

rl.on('close', () => {
    for(let i = 4; i <= 11; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    arr.forEach((item) => {
        console.log(dp[item]);
    })
});