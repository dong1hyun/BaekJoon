const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const map = [];

const n = +input[0];

input.map((item, index) => {
    if (index === 0) return;
    map.push(item.split('').map(Number));
});


let sum = 0;
const dfs = (r, c) => {
    map[r][c] = true;
    sum++;
    if (r + 1 < n && map[r + 1][c] !== true && map[r + 1][c] !== 0) {
        dfs(r + 1, c);
    }
    if (r - 1 >= 0 && map[r - 1][c] !== true && map[r - 1][c] !== 0) {
        dfs(r - 1, c);
    }
    if (c + 1 < n && map[r][c + 1] !== true && map[r][c + 1] !== 0) {
        dfs(r, c + 1);
    }
    if (c - 1 >= 0 && map[r][c - 1] !== true && map[r][c - 1] !== 0) {
        dfs(r, c - 1);
    }
}

const result = [];
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(map[i][j] !== true && map[i][j] !== 0) {
            dfs(i, j);
            result.push(sum);
            sum = 0;
        }
    }
}

result.sort((a, b) => a - b);

console.log(result.length);
result.forEach((item) => {
    console.log(item);
})