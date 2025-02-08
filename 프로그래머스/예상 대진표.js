function solution(n, a, b) {
    let l = Math.min(a, b);
    let m = Math.max(a, b);
    if(m - l === 1 && m % 2 === 0) return 1;
    for(let i = 2; i <= n; i++) {
        l = Math.round(l / 2);
        m = Math.round(m / 2);
        console.log(l, m);
        if(m - l === 1 && m % 2 === 0) return i;
    }
}