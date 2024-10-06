const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let first = true;
let n;
let arr;
let pn = new Array(1001).fill(true); // 소수만 true로 남겨야됨
pn[1] = false;
rl.on('line', (input) => {
    if(first) {
        n = +input;
        first = false;
        return;
    }
    arr = input.trim().split(' ');
});

rl.on('close', () => {
    for(let i = 2; i <= 1000; i++) {
        for(let j = i * i; j <= 1000; j += i) {
            if(pn[j]) pn[j] = false;
        }
    }

    for(let i = 1; i <= 1000; i++) {
        if(pn[i]) console.log(i);
    }

    result = 0;
    for(let i = 0; i < arr.length; i++) {
        if(pn[+arr[i]]) result++;
    }

    console.log(result);
});