function solution(maps) {
    const newMaps = maps.map((col) => {
        const arr = col.split('');
        return arr.map(item => item !== 'X' ? +item : item);
    })
    const n = newMaps.length;
    const m = newMaps[0].length;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let sum = 0;
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    const dfs = (x, y) => {
        visited[x][y] = true;
        sum += newMaps[x][y];
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && ny >= 0 && nx < n && ny < m && newMaps[nx][ny] !== 'X' && !visited[nx][ny]) {
                visited[nx][ny] = true;
                dfs(nx, ny);
            }
        }
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (newMaps[i][j] !== 'X' && !visited[i][j]) {
                sum = 0;
                dfs(i, j);
                result.push(sum);
            }
        }
    }
    if(result.length === 0) return [-1];
    result.sort((a, b) => a - b);
    return result;
}