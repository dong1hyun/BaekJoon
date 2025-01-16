function solution(numbers) {
    const result = [];
    numbers.forEach((n) => {
        const binary = n.toString(2);
        const end = binary.length - 1;
        if (binary[end] === '0') result.push(n + 1);
        else if (binary.split('').every((v) => v === '1')) {
            const newV = binary.slice(0, end);
            console.log("10" + newV)
            result.push(parseInt("10" + newV, 2));
        }
        else {
            const index = binary.lastIndexOf('0');
            const arr = binary.split('');
            arr[index] = '1';
            arr[index + 1] = '0';
            result.push(parseInt(arr.join(''), 2));
        }
    });

    return result;
}


// 10011
// 10101

// 11