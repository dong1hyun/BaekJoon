const gcd = (a, b) => {
    const r = a % b;
    if(r === 0) return b;
    else return gcd(b, a % b);
}

function solution(w, h) {
    return w * h - (w + h - gcd(w, h));
}