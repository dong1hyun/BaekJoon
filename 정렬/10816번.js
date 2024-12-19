const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cards = input[1].split(' ').map(Number);
const nums = input[3].split(' ').map(Number);

const map = new Map();

cards.forEach((n) => {
    if (map.has(n)) {
        map.set(n, map.get(n) + 1);
    } else {
        map.set(n, 1);
    }
});

const result = [];
nums.forEach((n) => {
    if(map.has(n)) result.push(map.get(n));
    else result.push(0);
});

console.log(...result);