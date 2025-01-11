function solution(n, k) {
    const isPN = (n) => {
        if(n <= 1) return false;
        for(let i = 2; i * i <= n; i++) {
            if(n % i === 0) return false;
        }
        return true;
    }
    
    const v = n.toString(k).split('0');
    let result = 0;
    v.forEach((n) => {
        if(isPN(n)) {
            result++;
        }
    });

    return result;
}