const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let tc = +input[0];
let first = true;
let start;

const result = [];
while(tc-- > 0) {
    if(first) {
        start = 1;
        first = false;
    }
    const n = +input[start];
    const applicants = [];
    for(let i = start + 1; i <= start + n; i++) {
        applicants.push(input[i].split(' ').map(Number));
    }
    applicants.sort((a, b) => a[0] - b[0]);
    let min = applicants[0][1];
    let sum = 1;
    for(let i = 1; i < n; i++) {
        if(applicants[i][1] < min) {
            min = applicants[i][1];
            sum++;
        }
    }
    result.push(sum);
    start += (n + 1);
}

console.log(result.join('\n'));