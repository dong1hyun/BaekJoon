const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(false));

const node = [];
for(let i = 1; i <= m; i++) {
    const [r, c] = input[i].split(' ').map(Number);
    graph[r][c] = graph[c][r] = true;
    node[r] = node[c] = true;
}

const visited = [];
const dfs = (v) => {
    visited[v] = true;
    for(let i = 1; i < graph.length; i++) {
        if(!visited[i] && graph[v][i]) {
            dfs(i);
        }
    }
}

let sum = 0;
for(let i = 1; i <= n; i++) {
    if(!visited[i]) {
        dfs(i);
        sum++;
    }
}

console.log(sum);