function solution(board) {
    let O_count = 0;
    let X_count = 0;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(board[i][j] === 'O') O_count++;
            if(board[i][j] === 'X') X_count++;
        }
    }
    if(X_count > O_count) return 0;
    if(O_count > X_count + 1) return 0;

    let O_win = 0;
    let X_win = 0;
    if(board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') O_win++;
    if(board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') O_win++;
    if(board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') O_win++;
    if(board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') O_win++;
    if(board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') O_win++;
    if(board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') O_win++;
    if(board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') O_win++;
    if(board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') O_win++;

    if(board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') X_win++;
    if(board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') X_win++;
    if(board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') X_win++;
    if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') X_win++;
    if(board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') X_win++;
    if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') X_win++;
    if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') X_win++;
    if(board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') X_win++;

    if(O_win > 2 || X_win > 2 || O_win > 0 && X_win > 0) return 0;
    if(O_win === 1 && O_count === X_count) return 0;
    if(X_win === 1 && O_count > X_count) return 0;

    return 1;
}

"XXO"
".OX"
"O.."