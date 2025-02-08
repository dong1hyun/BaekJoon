const extractChar = (item) => {
    return item.split('-')[0];
}

function solution(m, n, board) {
    let result = 0;
    const mapArr = [];
    for (let i = 0; i < n; i++) {
        const map = new Map();
        for (let j = m - 1; j >= 0; j--) {
            const char = board[j][i];
            map.set(`${char}-${j}`, true);
        }
        mapArr.push(map);
    }

    while (true) {
        const newBoard = [];
        mapArr.forEach((map) => {
            const mapKeys = Array.from(map.keys());
            newBoard.push(mapKeys);
        });
        const removeList = new Set();
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < m - 1; j++) {
                if(!newBoard[i][j] || !newBoard[i + 1][j] || !newBoard[i][j + 1] || !newBoard[i + 1][j + 1]) continue;
                if (
                    extractChar(newBoard[i][j]) === extractChar(newBoard[i + 1][j])
                    && extractChar(newBoard[i][j]) === extractChar(newBoard[i][j + 1])
                    && extractChar(newBoard[i][j]) === extractChar(newBoard[i + 1][j + 1])
                ) {
                    removeList.add(`${i},${newBoard[i][j]}`);
                    removeList.add(`${i + 1},${newBoard[i + 1][j]}`);
                    removeList.add(`${i},${newBoard[i][j + 1]}`);
                    removeList.add(`${i + 1},${newBoard[i + 1][j + 1]}`);
                }
            }
        }
        if(removeList.size === 0) return result;
        result += removeList.size;
        removeList.forEach((item) => {
            const index = item.split(',')[0];
            const char = item.split(',')[1];
            mapArr[index].delete(char);
        });
    }
}