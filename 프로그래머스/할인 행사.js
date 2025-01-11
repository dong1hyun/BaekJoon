function solution(want, number, discount) {
    const n = want.length;
    const check = {};
    for (let i = 0; i < n; i++) {
        const m = want[i];
        const c = number[i];
        check[m] = c;
    }
    let count = 0;
    for (let i = 0; i < 10; i++) {
        const m = discount[i];
        if (m in check) check[m]--;
    }

    let result = 0;
    if (Object.values(check).every((item) => item === 0)) {
        result++;
    }
    for (let i = 1; i + 9 < discount.length; i++) {
        const prev = discount[i - 1];
        if (prev in check) check[prev]++;
        if (check[prev] > 0) count--;

        const next = discount[i + 9];
        if (next in check) check[next]--;
        if (check[next] <= 0) count++;
        if (Object.values(check).every((item) => item === 0)) {
            result++;
        }
    }

    return result;
}