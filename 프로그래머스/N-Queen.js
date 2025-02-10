function solution(n) {
    const board = [];

    const isPossible = (col, row) => {
        for (let i = 0; i < board.length; i++) {
            if(row === board[i]) return false;
            if(Math.abs(board[i] - row) === Math.abs(col - i)) return false;
        }

        return true;
    }

    let result = 0;
    const dfs = (col) => {
        if(col === n) {
            result++;
            return;
        }
        for (let i = 0; i < n; i++) {
            if (isPossible(col, i)) {
                board.push(i);
                dfs(col + 1);
                board.pop();
            }
        }
    }

    dfs(0);

    return result;
}