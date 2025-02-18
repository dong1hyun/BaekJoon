const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const dfs = (map, visited, x, y) => {
    for(let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(nx >= 0 && ny >= 0 && nx < map.length && ny < map[0].length && !visited[nx][ny] && (map[nx][ny] === 'outside' || map[nx][ny] === 'empty')) {
            visited[nx][ny] = true;
            map[nx][ny] = 'outside';
            dfs(map, visited, nx, ny);
        }
    }
}

function solution(storage, requests) {
    for (let i = 0; i < storage.length; i++) {
        storage[i] = storage[i].split('');
    }
    const container = {}
    for (let i = 0; i < storage.length; i++) {
        for (let j = 0; j < storage[0].length; j++) {
            const c = storage[i][j];
            if (container[c]) {
                container[c].set(JSON.stringify([i, j]), true);
            } else {
                container[c] = new Map([[JSON.stringify([i, j]), true]]);
            }
        }
    };

    const visited = Array.from({length: storage.length}, () => new Array(storage[0].length).fill(false));
    requests.forEach((c) => {
        const map = container[c[0]];
        if (!map) return;
        if (c.length === 1) { // 외부 컨테이너만 제거
            const outsides = [];
            for (const [location, v] of map) {
                const [x, y] = JSON.parse(location);
                let isOutside = false;
                let emptys = [];
                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];
                    if (nx >= 0 && ny >= 0 && nx < storage.length && ny < storage[0].length && storage[nx][ny] === 'empty') {
                        emptys.push([nx, ny]);
                    }
                    if (
                        nx < 0 ||
                        ny < 0 ||
                        nx >= storage.length ||
                        ny >= storage[0].length ||
                        storage[nx][ny] === "outside"
                    ) {
                        map.delete(location);
                        outsides.push([x, y]);
                        isOutside = true;
                    };
                }
                if (isOutside) {
                    emptys.forEach((empty) => {
                        outsides.push(empty);
                    });
                }
            }

            outsides.forEach(([a, b]) => {
                storage[a][b] = 'outside';
                dfs(storage, visited, a, b);
            });
        }
        else { // 모든 컨테이너 제거
            const outsides = [];
            for (const [location, v] of map) {
                const [x, y] = JSON.parse(location);
                let isOutside = false;
                let emptys = [];
                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];
                    if (nx >= 0 && ny >= 0 && nx < storage.length && ny < storage[0].length && storage[nx][ny] === 'empty') {
                        emptys.push([nx, ny]);
                    }
                    if (
                        nx < 0 ||
                        ny < 0 ||
                        nx >= storage.length ||
                        ny >= storage[0].length ||
                        storage[nx][ny] === "outside"
                    ) {
                        outsides.push([x, y]);
                        isOutside = true;
                    }
                }
                if (isOutside) {
                    emptys.forEach((empty) => {
                        outsides.push(empty);
                    });
                }
                else {
                    storage[x][y] = 'empty';
                }
            }

            delete container[c[0]];
            outsides.forEach(([a, b]) => {
                storage[a][b] = 'outside';
                dfs(storage, visited, a, b);
            });
        }
    });
    
    let result = 0;
    for(let i = 0; i < storage.length; i++) {
        for(let j = 0; j < storage[0].length; j++) {
            if(storage[i][j] !== 'outside' && storage[i][j] !== 'empty') {
                result++;
            }
        }
    }

    return result;
}