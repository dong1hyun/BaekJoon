const max = 10000000;
const findPD = (n) => {
    if (n === 1) return 0;
    if (n % 2 === 0) return n / 2;
    for (let i = 3; i * i <= n; i++) {
        if (n % i === 0 && n / i <= max) return n / i;
    }
    return 1;
}

function solution(begin, end) {
    const result = [];
    for (let i = begin; i <= end; i++) {
        result.push(findPD(i));
    }

    return result;
}