function solution(n) {
    const fi = [];
    fi[0] = 0;
    fi[1] = 1;
    let i = 2;
    for(let i = 2; i <= n; i++) {
        fi[i] = (fi[i - 1] + fi[i - 2]) % 1234567;
    }    
    return fi[n];
}