function solution(n) {
    const sum = new Array(n + 1).fill(0);
    sum[0] = 2;
    sum[2] = 3;
    for (let i = 4; i <= n; i += 2) {
        let s = 0;
        for (let j = 2; j <= i; j += 2) {
            const m = j === 2 ? 3 : 2;
            let v;
            if (i === j) v = 2;
            else v = (sum[i - j] * m) % 1000000007;
            s += v;
        }
        sum[i] = s % 1000000007;
    };

    return sum[n];
};