const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let tc = +input[0];
const result = [];
let start = 1;
while(tc--) {
    const n = +input[start];
    const num = [];

    for(let i = start + 1; i <= start + n; i++) {
        num.push(input[i]);
    }
    num.sort();
    let c = 1;
    let v = num[0];
    let flag = true;
    while(c < n) {
        if(c < n && num[c].indexOf(v) === 0) {
            result.push("NO");
            flag = false;
            break;
        } else {
            v = num[c++];
        }
    }
    if(flag) result.push("YES");
    start += n + 1;
}

console.log(result.join('\n'));