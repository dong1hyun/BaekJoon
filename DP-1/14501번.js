const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let n;
let arr = [];
let max = 0;
rl.on('line', (input) => {
    if (first) {
        n = +input;
        first = false;
        return;
    }
    const [t, p] = input.split(' ').map(i => +i);
    arr.push([t, p]);
});

const solve = (day, money) => {
    if (day === n) {
        max = Math.max(money, max);
        return;
    }
    solve(day + 1, money);
    if (day + arr[day][0] <= n) {
        solve(day + arr[day][0], money + arr[day][1]);
    }
}

rl.on('close', () => {
    solve(0, 0);
    console.log(max);
});