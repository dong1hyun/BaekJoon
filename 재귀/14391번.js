const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m;
const paper = new Array(4).fill().map(() => new Array(4).fill(false));
const arr = [];
let max = 0;
let first = true;
rl.on('line', (input) => {
    if (first) {
        [n, m] = input.trim().split(' ').map(item => +item);
        first = false;
        return;
    }
    arr.push(input.trim().split('').map(item => +item));
});
let num;
const check = new Array(4).fill().map(() => new Array(4).fill(false))
const slicePaper = (x, y) => {
    if(y === m) {
        slicePaper(x + 1, 0);
        return;
    }
    if(x === n) {
        sum();
        return;
    }
    slicePaper(x, y + 1);
    paper[x][y] = true; // 가로
    slicePaper(x, y + 1);
    paper[x][y] = false; // 세로
}

const sum = () => {
    const check = new Array(5).fill().map(() => new Array(5).fill(false));
    let result = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(check[i][j]) continue;
            if(paper[i][j]) { // 가로이면
                k = j;
                let v = 0;
                while(k < m && paper[i][k]) {
                    v *= 10;
                    v += arr[i][k];
                    check[i][k] = true;
                    k++;
                }
                result += v;
            } 
            if(!paper[i][j]) { // 세로이면
                k = i;
                let v = 0;
                while(k < n && !paper[k][j]) {
                    v *= 10;
                    v += arr[k][j];
                    check[k][j] = true;
                    k++;
                }
                result += v;
            } 
        }
    }
    max = Math.max(max, result);
}

rl.on('close', () => {
    slicePaper(0, 0);
    console.log(max);
});