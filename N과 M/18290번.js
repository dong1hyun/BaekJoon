const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m, k;
let first = true;
let map = [];
let max = -100000000;

rl.on('line', (input) => {
    if (first) {
        [n, m, k] = input.trim().split(' ').map(item => +item);
        first = false;
        return;
    }
    const line = input.trim().split(' ').map(item => +item);
    map.push(line);
});

const check = new Array(11).fill().map(() => new Array(11).fill(false));
let v = 0;
const solve = (c) => {
    if(c === k) {
        max = Math.max(max, v);
        return;
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(check[i][j]) continue;
            if(i - 1 >= 0 && check[i - 1][j]) continue;
            if(i + 1 < n && check[i + 1][j]) continue;
            if(j - 1 >= 0 && check[i][j - 1]) continue;
            if(j + 1 < m && check[i][j + 1]) continue;
            v += map[i][j];
            check[i][j] = true;
            solve(c + 1);
            v -= map[i][j];
            check[i][j] = false;
        }
    }
};

rl.on('close', () => {
    solve(0);
    console.log(max);
});