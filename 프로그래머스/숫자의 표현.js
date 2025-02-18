function solution(n) {
    const sum = [0];
    for(let i = 1; i <= n; i++) {
        sum[i] = sum[i - 1] + i;
    }

    let result = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j <= n; j++) {
            if(sum[j] - sum[i] > n) break;
            if(sum[j] - sum[i] === n) result++;
        }
    }

    return result;
}