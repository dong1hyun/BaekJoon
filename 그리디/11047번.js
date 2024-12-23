const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);

const coin = [];
for(let i = 1; i <= n; i++) {
    if(+input[i] > k) break;
    coin.push(+input[i]);
}

let c = 0;
for(let i = coin.length - 1; i >= 0; i--) {
    if(k < coin[i]) {
        continue;
    }
    const v = Math.floor(k / coin[i]);
    c += v;
    k -= v * coin[i];
}

console.log(c);