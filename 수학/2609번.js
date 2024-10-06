const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Max = 100000001;

rl.on('line', (input) => {
    const line = input.trim().split(' ');
    const a = +line[0];
    const b = +line[1];
    let r1, r2;
    for(let i = 1; i < Max; i++) {
        if(a % i === 0 && b & i === 0) {
            r1 = i;
        }
        if(i % a === 0 && i % b === 0) {
            r2 = i; 
            break;
        }
    }
});

rl.on('close', () => {
  console.log(r1 + '\n' + r2);
});