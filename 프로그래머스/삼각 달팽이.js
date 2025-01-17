function solution(n) {
    const snail = Array.from(Array(1001), () => Array(1001));
    let num = 1;
    const solve = (c, length) => {
        for(let i = 0; i < length; i++) snail[c * 2 + i][c] = num++;
        for(let i = 1; i < length; i++) snail[n - c - 1][c + i] = num++;
        for(let i = 2; i < length; i++) snail[n - c - i][length + c - i] = num++;
        if(length - 3 <= 0) return;
        solve(c + 1, length - 3);
    }
    solve(0, n);
    let result = [];
    for(let i = 1; i <= n; i++) result = [...result, ...snail[i - 1].slice(0, i)];

    return result;
}