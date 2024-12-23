const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

let min = n % 3 === 0 ? n / 3 : 5000;
let c = 1;
while(n >= 5 * c) {
    if((n - 5 * c) % 3 === 0) {
        min = c + (n - 5 * c) / 3;
    }
    c++;
}

if(min === 5000) console.log(-1);
else console.log(min);