const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let first = true;
let n, m;
let map = [];
let check = new Array(501).fill(null).map(() => new Array(501).fill(false));
let max = 0;
rl.on('line', (input) => {
    if (first) {
        const temp = input.trim().split(' ');
        n = +temp[0];
        m = +temp[1];
        first = false;
    } else {
        map.push(input.trim().split(' ').map(item => +item));
    }
});


const solve = (a, b, c, v) => {
    const num = map[a][b];
    if (c === 3) {
        max = Math.max(max, v + num);
        return;
    }
    if (a + 1 < n && !check[a + 1][b]) {
        check[a + 1][b] = true;
        solve(a + 1, b, c + 1, v + num);
        check[a + 1][b] = false;
    }
    if (b + 1 < m && !check[a][b + 1]) {
        check[a][b + 1] = true;
        solve(a, b + 1, c + 1, v + num);
        check[a][b + 1] = false;
    }
    if (a - 1 >= 0 && !check[a - 1][b]) {
        check[a - 1][b] = true;
        solve(a - 1, b, c + 1, v + num);
        check[a - 1][b] = false;
    }
    if (b - 1 >= 0 && !check[a][b - 1]) {
        check[a][b - 1] = true;
        solve(a, b - 1, c + 1, v + num);
        check[a][b - 1] = false;
    }
};

rl.on('close', () => {
    for (let i = 0; i < n; i++) { // ㅏ,ㅓ,ㅗ,ㅜ 모양 외의 블럭은 재귀함수로 처리
        for (let j = 0; j < m; j++) {
            check[i][j] = true;
            solve(i, j, 0, 0);
            check[i][j] = false;
        }
    }
    for (let i = 0; i < n; i++) { // 'ㅜ, ㅗ'모양 블럭 처리
        for (let j = 0; j < m - 2; j++) {
            let v = map[i][j] + map[i][j + 1] + map[i][j + 2];
            if (i + 1 < n) {
                max = Math.max(max, v + map[i + 1][j + 1]);
            }
            if (i - 1 >= 0) {
                max = Math.max(max, v + map[i - 1][j + 1]);
            }
        }
    }
    for (let i = 0; i < n - 2; i++) { // 'ㅓ, ㅏ'모양 블럭 처리
        for (let j = 0; j < m; j++) {
            let v = map[i][j] + map[i + 1][j] + map[i + 2][j];
            if (j + 1 < m) {
                max = Math.max(max, v + map[i + 1][j + 1]);
            }
            if (j - 1 >= 0) {
                max = Math.max(max, v + map[i + 1][j - 1]);
            }
        }
    }
    console.log(max);
});