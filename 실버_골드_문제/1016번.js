const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const isSquareNNNum = new Array(b).fill(true);

const limit = Math.sqrt(n);
const isPrimeNum = new Array(limit).fill(true);
isPrimeNum[0] = isPrimeNum[1] = false;

for (let i = 2; i * i <= limit; i++) {
    if (isPrimeNum[i]) {
        for (let j = i * i; j <= limit; j += i) {
            isPrimeNum[j] = false;
        }
    }
}

// for(let i = a; i * i <= b; i++) {
//     if(isPrimeNum[i]) {
//         for(let )
//     }
// }