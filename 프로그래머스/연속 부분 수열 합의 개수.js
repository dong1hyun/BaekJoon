function solution(elements) {
    const length = elements.length;
    const check = {};
    const elements_sum = [];
    let t = 0;
    for (let i = 0; i < length; i++) {
        t += elements[i];
        elements_sum.push(t);
    }
    for (let i = 1; i <= length; i++) { // 길이
        let sum = elements_sum[i - 1];
        check[sum] = true;
        for (let j = 1; j < length; j++) { // 시작 위치
            if (j + i - 1 < length) {
                sum = sum - elements[j - 1] + elements[j + i - 1];
            }
            else {
                sum = sum - elements[j - 1] + elements[j + i - 1 - length];
            }
            check[sum] = true;
        }
    }
    return Object.keys(check).length;
}