function solution(numbers) {
    const compare = (n1, n2) => {
        if (Number(n1 + n2) > Number(n2 + n1)) {
            return -1;
        }
        else return 1;
    }
    numbers.sort((a, b) => {
        return compare('' + a, '' + b);
    });

    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i];
        if (n !== 0 || i === numbers.length - 1) {
            return numbers.slice(i, numbers.length).join('');
        }
    }
}