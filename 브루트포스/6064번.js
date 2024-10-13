const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let t;
let x, y;
let M, N;
rl.on('line', input => {
    if(first) {
        t = +input;
        first = false;
        return;
    }
    [M, N, x, y] = input.trim().split(' ').map(item => +item);
    let c = 0;

    while(true) {
        const v = M * c + x;
        if(v > M * N) {
            console.log(-1);
            return;
        }
        if(v % N === y || (N === y && v % N === 0)) {
            console.log(v);
            return;
        }
        c++;
    }
});
