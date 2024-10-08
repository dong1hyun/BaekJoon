const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
let result = [];
const solve = (sum, start) => {
    if(result.length == 7) {
        if(sum === 100) return true;
        return false;
    }
    for(let i = start; i < 9; i++) {
        const v = arr[i];
        result.push(v);
        if(solve(sum + v, i + 1)) {
            return true;
        }
        result.pop();
    }
}

rl.on('line', (input) => {
    arr.push(+input);
});

rl.on('close', () => {
    solve(0, 0, 0);
    result.sort((a, b) => a - b);
    for (let i = 0; i < 7; i++) {
        console.log(result[i]);
    }
});