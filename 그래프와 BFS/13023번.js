const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => []);
for(let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
const visited = new Array(n + 1).fill(false);
let result = 0;

const dfs = (v, d) => {
    visited[v] = true;
    if(d >= 4) {
        result = 1;
        return;
    }
    for(const i of graph[v]) {
        if(!visited[i]) {
            visited[i] = true;
            dfs(i, d + 1);
            visited[i] = false;
        }
    }
}

for(let i = 0; i < n; i++) {
    if(!visited[i]) {
        dfs(i, 0);
        if(result) {
            console.log(1);
            return;
        }
        visited[i] = false;
    }
}

console.log(result);