function solution(numbers, target) {
    let result = 0;
    const solve = (n, i) => {
        if (n < target) return;
        if (n === target) {
            result++;
            return;
        }
        if(i >= numbers.length) return;
        const v = numbers[i];
        solve(n - v * 2, i + 1);
        solve(n, i + 1);
    }

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    solve(sum, 0);
    return result;
}