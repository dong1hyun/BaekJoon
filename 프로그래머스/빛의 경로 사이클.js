function solution(grid) {
    const n = grid.length;
    const m = grid[0].length;
    let sum;
    const visited = Array.from(Array(n + 1), () => Array.from(Array(m + 1), () => Array(4).fill(false)));
    const result = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = 0; k < 4; k++) {
                sum = 0;
                if (!visited[i][j][k]) {
                    let [x, y, d] = [i, j, k];
                    while(true) {
                        let flag = true;
                        nx = x;
                        ny = y;
                        if (d === 0) { // 상
                            if (x === 0) {
                                if (!visited[n - 1][y][0]) {
                                    visited[n - 1][y][0] = true;
                                    x = n - 1;
                                    nx = n - 1;
                                    flag = false;
                                }
                            } else {
                                if (!visited[x - 1][y][0]) {
                                    visited[x - 1][y][0] = true;
                                    x = x - 1;
                                    nx = x;
                                    flag = false;
                                }
                            }
                            if(grid[nx][ny] === 'L') d = 2;
                            else if(grid[nx][ny] === 'R') d = 3;
                        }
                        else if (d === 1) { // 하
                            if (x === n - 1) {
                                if (!visited[0][y][1]) {
                                    visited[0][y][1] = true;
                                    x = 0;
                                    nx = 0;
                                    flag = false;
                                }
                            } else {
                                if (!visited[x + 1][y][1]) {
                                    visited[x + 1][y][1] = true;
                                    x = x + 1;
                                    nx = x;
                                    flag = false;
                                }
                            }
                            if(grid[nx][ny] === 'L') d = 3;
                            else if(grid[nx][ny] === 'R') d = 2;
                        }
                        else if (d === 2) { // 좌
                            if (y === 0) {
                                if (!visited[x][m - 1][2]) {
                                    visited[x][m - 1][2] = true;
                                    y = m - 1;
                                    ny = m - 1;
                                    flag = false;
                                }
                            } else {
                                if (!visited[x][y - 1][2]) {
                                    visited[x][y - 1][2] = true;
                                    y = y - 1;
                                    ny = y;
                                    flag = false;
                                }
                            }
                            if(grid[nx][ny] === 'L') d = 1;
                            else if(grid[nx][ny] === 'R') d = 0;
                        }
                        else { // 우
                            if (y === m - 1) {
                                if (!visited[x][0][3]) {
                                    visited[x][0][3] = true;
                                    y = 0;
                                    ny = 0;
                                    flag = false;
                                }
                            } else {
                                if (!visited[x][y + 1][3]) {
                                    visited[x][y + 1][3] = true;
                                    y = y + 1;
                                    ny = y;
                                    flag = false;
                                }
                            }
                            if(grid[nx][ny] === 'L') d = 0;
                            else if(grid[nx][ny] === 'R') d = 1;
                        }
                        if(flag) break;
                        sum++;
                    }

                    result.push(sum);
                }
            }
        }
    }

    result.sort((a, b) => a - b);
    return(result);
}

"SL"
"LR"