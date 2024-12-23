const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

if(n === 1) {
    console.log(1);
}
else if(n === 2) {
    if(m <= 2) console.log(1);
    else if(m < 5) console.log(2);
    else if(m < 7) console.log(3);
    else console.log(4);
}
else {
    if(m === 1) console.log(1)
    else if(m === 2) console.log(2);
    else if(m == 3) console.log(3);
    else if(m <= 6) console.log(4);
    else console.log(m - 2);
}