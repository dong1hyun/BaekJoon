const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
rl.on('line', (input) => {
    n = +input;
});

let c = 9;
let f = '9';
let result = 0;
rl.on('close', () => {
    if(n <= 9) {
        console.log(n);
        return;
    }
    while(true) {
        if(n < +f) {
            const flag = Math.pow(10, f.length - 1);
            const v = n - flag + 1;
            result += (v * f.length);
            console.log(result);
            return;
        }
        result += ('' + c).length * c;
        c *= 10;
        f += '9';
    }
});
