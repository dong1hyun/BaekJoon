const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const A = input[1].split(' ').map(Number);
const sortedA = [...A].sort((a, b) => a - b);
const nums = {};
sortedA.forEach((n, i) => {
    if(nums[n]) {
        nums[n]['arr'].push(i);
    } else {
        nums[n] = {
            arr: [i],
            index: 0
        }
    }
});

const P = [];
for(let i = 0; i < n; i++) {
    const n = A[i];
    const index = nums[n]['index']++;
    const arr = nums[n]['arr'];
    P.push(arr[index]);
}

console.log(...P);