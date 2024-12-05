const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, v] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => new Array(n + 1).fill(false));

for(let i = 1; i <= m; i++) {
    const [r, c] = input[i].split(' ').map(Number);
    graph[r][c] = graph[c][r] = true;
}

const DFS_visited = new Array(n + 1).fill(false);
const DFS_answer = [];
const BFS_visited = new Array(n + 1).fill(false);
const BFS_answer = [];

function dfs(v) {
    DFS_visited[v] = true;
    DFS_answer.push(v);
    for(let i = 1; i < graph.length; i++) {
        if(graph[v][i] && !DFS_visited[i]) {
            dfs(i);
        }
    }
}

function bfs(v) {
    const queue = [];
    BFS_visited[v] = true;
    BFS_answer.push(v);
    queue.push(v);
    while(queue.length !== 0) {
        const v2 = queue.shift();
        for(let i = 1; i < graph.length; i++) {
            if(!BFS_visited[i] && graph[v2][i]) {
                queue.push(i);
                BFS_visited[i] = true;
                BFS_answer.push(i);
            }
        }
    }
}

dfs(v);
bfs(v);

console.log(...DFS_answer);
console.log(...BFS_answer);