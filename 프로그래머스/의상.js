function solution(clothes) {
    const count = new Map();
    clothes.forEach(([_, type]) => {
        if (count.has(type)) count.set(type, count.get(type) + 1);
        else count.set(type, 1);
    });

    let result = 1;
    count.forEach((v, k) => {
        result *= (v + 1);
    });

    return result - 1;
}