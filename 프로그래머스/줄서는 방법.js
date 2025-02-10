function solution(n, k) {
    const factorial = [1];
    const nums = [];
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
        nums.push(i);
    }

    const result = [];
    k--;
    for(let i = n - 1; i >= 0; i--) {
        let index = Math.floor(k / factorial[i]);
        result.push(nums[index]);
        nums.splice(index, 1);
        k %= factorial[i];
    }

    return result;
}