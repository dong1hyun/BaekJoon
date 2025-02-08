function solution(N, road, K) {
    const distance = Array.from({ length: N + 1 }, () => []);
    road.forEach((r) => {
        if(distance[r[0]][r[1]]) distance[r[0]][r[1]] = distance[r[1]][r[0]] = Math.min(distance[r[0]][r[1]], r[2]);
        else distance[r[0]][r[1]] = distance[r[1]][r[0]] = r[2];
    });
    const graph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(Infinity));
    for(let i = 1; i <= N; i++) {
        for(let j = 1; j <= N; j++) {
            if(distance[i][j]) {
                graph[i][j] = distance[i][j];
            }
            if(i === j) graph[i][j] = 0;
        }
    }
    for(let k = 1; k <= N; k++) {
        for(let i = 1; i <= N; i++) {
            for(let j = 1; j <= N; j++) {
                if(graph[i][k] !== Infinity && graph[k][j] !== Infinity) {
                    graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
                }
            }
        }   
    }

    let result = 0;
    for(let i = 1; i <= N; i++) {
        if(graph[1][i] <= K) result++;
    }

    return result;
};