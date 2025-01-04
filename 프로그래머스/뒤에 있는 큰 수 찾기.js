function solution(numbers) {
    const stack = [];
    const result = new Array(numbers.length).fill(-1);
    for (let i = 0; i < numbers.length; i++) {
        while (numbers[i] > numbers[stack.at(-1)]) {
            const index = stack.pop();
            result[index] = numbers[i];
        }
        stack.push(i);
    }

    return result;
}