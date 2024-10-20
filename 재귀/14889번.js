const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let arr = [];
let first = true;
let min = 1000000000;
rl.on('line', (input) => {
    if (first) {
        n = +input;
        first = false;
        return;
    }
    arr.push(input.trim().split(' ').map(item => +item));
});

let squad = [];
const solve = (c, start) => {
    if (c === n / 2) {
        let squad2 = [];
        let idx = 0;
        for(let k = 0; k < n; k++) {
            if(squad[idx] === k) {
                idx++;
                continue;
            }
            squad2.push(k);
        }
        let v = 0, v2 = 0;
        for (let i = 0; i < n / 2; i++) {
            const a = squad[i];
            const a2 = squad2[i];
            for (let j = 0; j < n / 2; j++) {
                if (i === j) continue;
                const b = squad[j];
                const b2 = squad2[j];
                v += arr[a][b];
                v2 += arr[a2][b2];
            }
        }
        const result = Math.abs(v - v2);
        min = Math.min(min, result);
        return;
    }
    for (let i = start; i < n; i++) {
        squad.push(i);
        solve(c + 1, i + 1);
        squad.pop();
    }
}

rl.on('close', () => {
    solve(0, 0);
    console.log(min);
});