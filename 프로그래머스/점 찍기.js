function solution(k, d) {
    const findY = (x) => {
        return Math.floor(Math.sqrt(d * d - x * x));
    }

    let sum = 0;
    for (let i = 0; i <= d; i += k) {
        const y = findY(i);
        sum += Math.floor(y / k) + 1;
    }

    return sum;
}