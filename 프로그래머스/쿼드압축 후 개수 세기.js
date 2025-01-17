function solution(arr) {
    const n = arr.length;
    let zeroCount = 0;
    let oneCount = 0;
    const solve = (x, y, length) => {
        let prev = -1;
        for (let i = x; i < x + length; i++) {
            for (let j = y; j < y + length; j++) {
                const v = arr[i][j];
                if (prev === -1) prev = v;
                else if (prev !== v) {
                    length /= 2;
                    solve(x, y, length);
                    solve(x + length, y, length);
                    solve(x, y + length, length);
                    solve(x + length, y + length, length);
                    return;
                }
            }
        }
        if (prev === 0) zeroCount++;
        else oneCount++;
    }

    solve(0, 0, n);

    return [zeroCount, oneCount];
}