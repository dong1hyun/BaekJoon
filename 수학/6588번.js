const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Max = 1000001;
let pn = new Array(Max).fill(true);
pn[1] = false;

for (let i = 2; i <= Max; i++) {
    for (let j = i * i; j <= Max; j += i) {
        if (pn[j]) pn[j] = false;
    }
}

let result = "";
rl.on('line', (input) => {
    const n = +input;
    for(let i = 2; i <= n / 2; i++) {
        if(pn[i] && pn[n - i]) {
            result += ('' + n + ' = ' + i + ' + ' + (n - i) + '\n');
            return;
        }
    }
});

rl.on('close', () => {
    console.log(result);
});