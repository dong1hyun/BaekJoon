function solution(prices) {
    const result = [];
    for (let i = 0; i < prices.length - 1; i++) {
        const v = prices[i];
        let t = 0;
        for (let j = i + 1; j < prices.length; j++) {
            t++;
            if (v > prices[j] || j === prices.length - 1) {
                result.push(t);
                break;
            }
        }
    }
    result.push(0)
    return result;
}