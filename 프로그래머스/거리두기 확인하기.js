function solution(places) {
    const result = [];

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const check = (x, y, room) => {
        const next = [];
        const startX = x;
        const startY = y;
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || ny < 0 || nx > 4 || ny > 4) continue;
            if (room[nx][ny] === 'X') continue;
            if (room[nx][ny] === 'P') return false;
            next.push([nx, ny]);
        }
        while (next.length > 0) {
            const [x, y] = next.pop();
            for (let i = 0; i < 4; i++) {
                const [nx, ny] = [x + dx[i], y + dy[i]];
                if (nx < 0 || ny < 0 || nx > 4 || ny > 4) continue;
                if (nx === startX && ny === startY) continue;
                if (room[nx][ny] === 'P') return false;
            }
        }
        return true;
    }
    for (let k = 0; k < 5; k++) {
        const room = places[k];
        let checked = false;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if(checked) break;
                if (room[i][j] === 'P' && !check(i, j, room)) {
                    result.push(0);
                    checked = true;
                }
            }
            if(checked) break;
        }
        if(!checked) result.push(1);
    }

    return result;
}