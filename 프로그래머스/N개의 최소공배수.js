function solution(arr) {
    const gcd = (a, b) => {
        const r = a % b;
        if(r === 0) return b;
        return gcd(b, r);
    }

    if(arr.length === 1) return arr[0];
    let v = arr[0] * arr[1] / gcd(arr[0], arr[1]);
    for(let i = 2; i < arr.length; i++) {
        v = v * arr[i] / gcd(v, arr[i]);
    }

    return v;
}