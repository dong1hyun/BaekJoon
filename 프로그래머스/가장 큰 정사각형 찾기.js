function solution(board) {
    let result = 0;
    const count = Array.from({length: board.length}, () => Array(board[0].length).fill(0));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if(i === 0 || j === 0) {
                if(board[i][j] === 1) {
                    count[i][j] = 1;
                    if(result === 0) result = 1;
                }
                else count[i][j] = 0;
            }
            else {
                if(board[i][j] === 1) {
                    const min = Math.min(count[i - 1][j - 1], count[i - 1][j], count[i][j - 1]);
                    count[i][j] = min + 1;
                    result = Math.max(result, min + 1);
                } else {
                    count[i][j] = 0;
                }
            }
        }
    }

    return result * result;
};