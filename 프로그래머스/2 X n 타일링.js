function solution(n) {
    const sum = new Array(n + 1).fill(0);
    sum[1] = 1;
    sum[2] = 2;

    for(let i = 3; i <= n; i++) {
        sum[i] = (sum[i - 1] + sum[i - 2]) % 1000000007;
    };

    return sum[n];
};