const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let n;
let arr;
let max = 0;

rl.on('line', (input) => {
    if(first) {
        n = +input;
        first = false;
        return;
    }
    arr = input.split(' ').map((item) => +item);
});

rl.on('close', () => {
    const dp = new Array(n).fill(1);
    for(let i = 1; i < n; i++) {
        let m = 0;
        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] < arr[i]) {
                m = Math.max(m, dp[j]);
            }
        }
        dp[i] += m;
    }

    for(let i = 0; i < n; i++) {
        max = Math.max(dp[i], max);
    }
    console.log(max);
});