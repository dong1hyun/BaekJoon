const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const A = [];
const B = [];

for(let i = 1; i <= n; i++) {
    A.push(input[i].split(''));
}

for(let i = n + 1; i <= n * 2; i++) {
    B.push(input[i].split(''));
}

const reverse = (x, y) => {
    for(let i = x; i < x + 3; i++) {
        for(let j = y; j < y + 3; j++) {
            A[i][j] = A[i][j] === '1' ? '0' : '1';
        }
    }
}
let c = 0;
for(let i = 0; i < n - 2; i++) {
    for(let j = 0;  j < m - 2; j++) {
        if(A[i][j] !== B[i][j]) {
            reverse(i, j);
            c++;
        }
    }
}
for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(A[i][j] !== B[i][j]) {
            console.log(-1);
            return;
        }
    }
}

console.log(c);