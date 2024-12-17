const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = [];
for(let i = 1; i <= n; i++) {
    map.push(input[i].split(''));
}

let visited;
const checked = Array.from(Array(n + 1), () => new Array(m + 1).fill(false));

let A;
let result = false
const dfs = (x, y, c) => {
    if(result) return;
    if(x + 1 < n && visited[x][y] - visited[x + 1][y] > 1 && map[x + 1][y] === A) {
        result = true;
    }
    if(x + 1 < n && !checked[x + 1][y] && map[x + 1][y] === A) {
        visited[x + 1][y] = c + 1;
        checked[x + 1][y] = true;
        dfs(x + 1, y, c + 1);
    }
    if(y + 1 < m && visited[x][y] - visited[x][y + 1] > 1 && map[x][y + 1] === A) {
        result = true;
    }
    if(y + 1 < m && !checked[x][y + 1] && map[x][y + 1] === A) {
        visited[x][y + 1] = c + 1;
        checked[x][y + 1] = true;
        dfs(x, y + 1, c + 1);
    }
    if(x - 1 >= 0 && visited[x][y] - visited[x - 1][y] > 1 && map[x - 1][y] === A) {
        result = true;
    }
    if(x - 1 >= 0 && !checked[x - 1][y] && map[x - 1][y] === A) {
        visited[x - 1][y] = c + 1;
        checked[x - 1][y] = true;
        dfs(x - 1, y, c + 1);
    }
    if(y - 1 >= 0 && visited[x][y] - visited[x][y - 1] > 1 && map[x][y - 1] === A) {
        result = true;
    }
    if(y - 1 >= 0 && !checked[x][y - 1] && map[x][y - 1] === A) {
        visited[x][y - 1] = c + 1;
        checked[x][y - 1] = true;
        dfs(x, y - 1, c + 1);
    }
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        visited = Array.from(Array(n), () => new Array(m).fill(300));
        if(!checked[i][j]) {
            visited[i][j] = 1;
            checked[i][j] = true;
            A = map[i][j];
            dfs(i, j, 1);
            if(result) {
                console.log("Yes");
                return;
            }
        }
    }
}

console.log("No");