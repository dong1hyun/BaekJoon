function solution(info, n, m) {
    const dp = Array.from({length: n}, () => new Array(m).fill(n + m));
    dp[0][0] = 0;

    for(let i = 0; i < info.length; i++) {
        let [ac, bc] = info[i];
        
        for(let a = 0; i < n; a++) {
            for(let b = 0; b < m; b++) {
                
            }
        }
    }
};