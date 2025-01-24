function solution(dirs) {
    const d = {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1]
    }
    const visited = {};
    let result = 0;
    let x = 0, y = 0;
    for(let i = 0; i < dirs.length; i++) {
        const c = dirs[i];
        const [dx, dy] = d[c];
        const [nx, ny] = [x + dx, y + dy];
        if(nx >= -5 && ny >= -5 && nx <= 5 && ny <= 5) {
            const r1 = JSON.stringify([x, y, nx, ny]);            
            const r2 = JSON.stringify([nx, ny, x, y]);  
            if(!visited[r1]) result++;
            visited[r1] = true;
            visited[r2] = true;
            [x, y] = [nx, ny];
        }
    }

    return result;
}