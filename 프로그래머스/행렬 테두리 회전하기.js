function solution(rows, columns, queries) {
    const table = [];
    for (let i = 0; i < columns; i++) {
        const row = [];
        for (let j = 1; j <= rows; j++) {
            row.push(j + i * rows);
        }
        table.push(row);
    };
    const rotate = (a, b, c, d) => {
        let min = Number.MAX_SAFE_INTEGER;
        for(let i = b; i <= c; i++) min = Math.min(min, table[a][i]);
        for(let i = a; i <= d; i++) min = Math.min(min, table[i][d]);
        for(let i = b; i <= c; i++) min = Math.min(min, table[c][i]);
        for(let i = a; i <= d; i++) min = Math.min(min, table[i][b]);

        let end = table[a][d];
        for (let i = d; i > b; i--) {
            table[a][i] = table[a][i - 1];
        }
        let t = end;
        end = table[c][d];
        for (let i = c; i >= a + 1; i--) {
            if (i === a + 1) table[i][d] = t;
            else table[i][d] = table[i - 1][d];
        }
        t = end;
        end = table[c][b];
        for (let i = b; i <= d - 1; i++) {
            if (i === d - 1) table[c][i] = t;
            else table[c][i] = table[c][i + 1];
        }
        for (let i = a; i <= c - 1; i++) {
            if (i === c - 1) table[i][b] = end;
            else table[i][b] = table[i + 1][b];
        }

        return min;
    }

    const result = [];
    queries.forEach((arr) => {
        const [a, b, c, d] = arr;
        result.push(rotate(a - 1, b - 1, c - 1, d - 1));
    });
}

solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]);

// 6 6

// [2,2,5,4]
// [3,3,6,6]
// [5,1,6,3]

// [8, 10, 25]