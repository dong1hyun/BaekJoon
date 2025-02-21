const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = +input[0];
let start = 1;
for(let t = 0; t < tc; t++) {
    const [n, m, c] = input[start].split(' ').map(Number);
    const ground = Array.from({length: n}, () => new Array(m).fill(0));
    
    for(let i = start + 1; i <= start + c; i++) {
        const [x, y] = input[i].split(' ').map(Number);
        ground[x][y] = 1;
    }

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const visited = Array.from({length: n}, () => new Array(m).fill(false));
    const dfs = (x, y) => {
        visited[x][y] = true;

        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx >= 0 && ny >= 0 && nx < n && ny < m && ground[nx][ny] === 1 && !visited[nx][ny]) {
                dfs(nx, ny);
            }
        }
    }

    let result = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(ground[i][j] === 1 && !visited[i][j]) {
                result++;
                dfs(i, j);
            }
        }
    }

    console.log(result);
    start += (c + 1);
}