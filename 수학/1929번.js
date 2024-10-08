const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Max = 1000001;
let a, b;
let pn = new Array(Max).fill(true);
pn[1] = false;
rl.on('line', (input) => {
    const line = input.trim().split(' ');
    a = +line[0];
    b = +line[1];
});

rl.on('close', () => {
    for(let i = 2; i <= Max; i++) {
        for(let j = i * i; j <= Max; j += i) {
            if(pn[j]) pn[j] = false;
        }
    }

    for(let i = a; i <= b; i++) {
        if(pn[i]) console.log(i);
    }
});