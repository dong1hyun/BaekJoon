const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l, c;
let first = true;
let alf;
rl.on('line', (input) => {
    if(first) {
        [l, c] = input.trim().split(' ').map(item => +item);
        first = false;
        return;
    }
    alf = input.trim().split(' ');
    alf.sort();
});

const password = [];
let result = "";
const solve = (n, start) => {
    if(n === l) {
        let a = 0;
        for(let i = 0; i < l; i++) {
            const v = password[i];
            if(v === 'a' || v === 'e' || v === 'i' || v === 'o' || v === 'u') a++;
        }
        if(a === 0 || l - a < 2) return;
        password.forEach(item => result += item);
        result += '\n';
        return;
    }
    for(let i = start; i < c; i++) {
        password.push(alf[i]);
        solve(n + 1, i + 1);
        password.pop();
    }
}

rl.on('close', () => {
    solve(0, 0);
    console.log(result);
});