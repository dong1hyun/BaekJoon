const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const num = [];

for (let i = 1; i <= n; i++) {
    num.push(+input[i]);
}

if (n === 1) {
    console.log(num[0]);
    return;
}

num.sort((a, b) => b - a);
let index = -1;
for (let i = 0; i < n; i++) {
    if (num[i] <= 0) {
        index = i;
        break;
    }
}

if (index === -1) {
    console.log(solve(num));
}
else if(index === 0) {
    const arr = num.reverse();
    console.log(solve(arr));
}
else {
    const arr1 = num.slice(0, index);
    const arr2 = num.slice(index, n).reverse();
    console.log(solve(arr1) + solve(arr2));
}

function solve(arr) {
    c = 0;
    let sum = 0;
    while (c < arr.length) {
        const v1 = arr[c];
        const v2 = arr[c + 1];
        if (v1 * v2 > v1 + v2) {
            sum += v1 * v2;
            c += 2;
        }
        else {
            sum += v1;
            c += 1;
        }
    }
    return sum;
}