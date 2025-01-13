function solution(n, wires) {
    const graph = Array.from(Array(n + 1), () => Array(n + 1));
    let visited;
    wires.forEach(([a, b]) => {
        graph[a][b] = true;
        graph[b][a] = true;
    });
    let v1, v2;
    let first;
    const dfs = (s) => {
        if (first) v1++;
        else v2++;
        for (let i = 1; i <= n; i++) {
            if (!visited[i] && graph[s][i]) {
                visited[i] = true;
                dfs(i);
            }
        }
    };

    let min = 100;
    for (let i = 0; i < n - 1; i++) {
        visited = new Array(n + 1).fill(false);
        const [a, b] = wires[i];
        graph[a][b] = graph[b][a] = false;
        first = true;
        v1 = v2 = 0;
        for (let j = 1; j <= n; j++) {
            if (!visited[j]) {
                visited[j] = true;
                dfs(j);
                first = false;
            }
        }
        min = Math.min(min, Math.abs(v1 - v2));
        graph[a][b] = graph[b][a] = true;
    }

    return min;
}


"SL"
"LR"