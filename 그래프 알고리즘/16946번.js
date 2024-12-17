const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = [];
const result = [];
for(let i = 1; i <= n; i++) {
    map.push(input[i].split('').map(Number));
    result.push(input[i].split('').map(Number));
}
const count = [];

let sum;
const dfs = (x, y, c) => {
    if(x + 1 < n && map[x + 1][y] === 0) {
        map[x + 1][y] = c;
        sum++;
        dfs(x + 1, y, c);
    }
    if(y + 1 < m && map[x][y + 1] === 0) {
        map[x][y + 1] = c;
        sum++;
        dfs(x, y + 1, c);
    }
    if(x - 1 >= 0 && map[x - 1][y] === 0) {
        map[x - 1][y] = c;
        sum++;
        dfs(x - 1, y, c);
    }
    if(y - 1 >= 0 && map[x][y - 1] === 0) {
        map[x][y - 1] = c;
        sum++;
        dfs(x, y - 1, c);
    }
}


let num = 2;
for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(map[i][j] === 0) {
            map[i][j] = num;
            sum = 1;
            dfs(i, j, num);
            count[num++] = sum;
        }
    }
}

let visited = [];
for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(map[i][j] === 1) {
            visited = [];
            sum = 1;
            if(i + 1 < n && map[i + 1][j] > 1 && !visited[map[i + 1][j]]) {
                visited[map[i + 1][j]] = true;
                sum += count[map[i + 1][j]];
            }
            if(j + 1 < m && map[i][j + 1] > 1 && !visited[map[i][j + 1]]) {
                visited[map[i][j + 1]] = true;
                sum += count[map[i][j + 1]];
            }
            if(i - 1 >= 0 && map[i - 1][j] > 1 && !visited[map[i - 1][j]]) {
                visited[map[i - 1][j]] = true;
                sum += count[map[i - 1][j]];
            }
            if(j - 1>= 0 && map[i][j - 1] > 1 && !visited[map[i][j - 1]]) {
                visited[map[i][j - 1]] = true;
                sum += count[map[i][j - 1]];
            }
            result[i][j] = sum % 10;
        }
    }
}

result.forEach((row) => console.log(row.join('')));