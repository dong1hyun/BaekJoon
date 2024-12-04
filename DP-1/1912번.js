const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let n;
let arr;
let max;
const dp = new Array(100001).fill(0);

rl.on('line', (input) => {
    if(first) {
        n = +input;
        first = false;
        return;
    }
    arr = input.split(' ').map(item => +item);
});

rl.on('close', () => {
    let cur = arr[0];
    max = cur;
    for(let i = 1; i < n; i ++) {
        if(cur >= 0) {
            if(arr[i] > 0) cur += arr[i];
            if(arr[i] < 0) {
                if(cur + arr[i] > 0) {
                    cur += arr[i];
                } else {
                    cur = 0;
                }
            } 
        } else {
            if(arr[i] > cur) cur = arr[i];
        }
        max = Math.max(max, cur);
    }

    console.log(max);
});