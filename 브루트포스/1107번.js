const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let d;
let n;
let list = new Array(10).fill(true);
let first = true, second = true;
let min = 500001;
rl.on('line', (input) => {
    if (first) {
        d = input;
        first = false;
    } else if (second) {
        n = +input;
        second = false;
    } else {
        input.trim().split(" ").forEach((item) => {
            list[+item] = false;
        });
    }

    min = Math.abs(+d - 100);
});

const solve = (n) => {
    if (n.length === d.length + 2) return;
    if (n !== '') {
        const r = Math.abs(+n - (+d)) + n.length;
        min = Math.min(min, r);
    }
    for (let i = 0; i <= 9; i++) {
        if (list[i]) {
            solve(n + i);
        }
    }
}

rl.on('close', () => {
    if (n === 10) {
        console.log(min);
        return;
    }
    if(+d === 100) {
        console.log(0);
        return;
    }
    solve('');
    console.log(min);
});