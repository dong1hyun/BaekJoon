const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arr = [];
const result = [];
for(let i = 1; i <= n + m; i++) {
    arr.push(input[i]);
}

arr.sort();

let prev = "";
arr.forEach((name, i) => {
    if(prev === name) result.push(name);
    prev = name;
});

console.log(result.length);
console.log(result.join('\n'));