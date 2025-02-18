const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = +input[0];

for(let i = 1; i < input.length; i++) {
    const n = +input[i];
    const dp0 = [];
    const dp1 = [];

    dp0[0] = 1;
    dp0[1] = 0;
    dp0[2] = 1;
    dp1[0] = 0;
    dp1[1] = 1;
    dp1[2] = 1;

    for(let i = 3; i <= n; i++) {
        dp0[i] = dp0[i - 2] + dp0[i - 1];
        dp1[i] = dp1[i - 2] + dp1[i - 1];
    }

    console.log(dp0[n], dp1[n]);
}