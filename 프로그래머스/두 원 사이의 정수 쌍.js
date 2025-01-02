function solution(r1, r2) {
    const r1_equation = (x) => {
        return Math.sqrt((r1 * r1) - (x * x));
    }
    const r2_equation = (x) => {
        return Math.sqrt((r2 * r2) - (x * x));
    }

    const axis_value = (r2 - r1 + 1) * 4;
    let sum = 0;
    for (let i = 1; i < r1; i++) {
        const v1 = Math.ceil(r1_equation(i));
        const v2 = Math.floor(r2_equation(i));
        sum += (v2 - v1 + 1);
    }
    for (let i = r1; i < r2; i++) {
        const v2 = Math.floor(r2_equation(i));
        sum += v2;
    }

    sum *= 4;
    sum += axis_value;

    return sum;
}