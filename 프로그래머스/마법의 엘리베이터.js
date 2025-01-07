function solution(storey) {
    let str = storey.toString();
    let sum = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        const n = Number(str[i]);
        if (n === 5 && i >= 1) {
            if (Number(str[i - 1]) >= 5) {
                storey += (Math.pow(10, str.length - i - 1) * (10 - n));
                sum += (10 - n);
            }
        }
        if (n >= 6) {
            storey += (Math.pow(10, str.length - i - 1) * (10 - n));
            sum += (10 - n);
        }
        str = storey.toString();
    }

    for (let i = 0; i < str.length; i++) {
        const n = Number(str[i]);
        sum += n;
    }

    return sum;
}