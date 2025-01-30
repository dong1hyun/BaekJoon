function solution(n, t, m, p) {
    let str = "";
    let v = 0;
    let result = "";
    while(str.length <= t * m) {
        str += v.toString(n);
        v++;
    }
    let count = 0;
    for(let i = p - 1; count++ < t; i += m) {
        result += str[i].toUpperCase();
    }

    return result;
}