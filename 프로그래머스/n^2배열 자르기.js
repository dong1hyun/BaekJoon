function solution(n, left, right) {
    let cur = Math.ceil((left + 1) / n);
    const length = right - left + 1;
    arr = [];
    while (arr.length <= Math.ceil(length / n) * n) {
        for (let i = 0; i < cur; i++) arr.push(cur);
        for (let i = cur + 1; i <= n; i++) arr.push(i);
        cur++;
    }
    const start = left % n;

    return arr.slice(start, start + length);
}
