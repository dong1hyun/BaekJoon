function solution(sequence, k) {
    const accumulator = [];

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] > k) {
            sequence.splice(i);
            break;
        }
    }
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === k) {
            return [i, i];
        }
    }

    const sum = sequence.reduce((acc, cur) => {
        accumulator.push(acc);
        return acc + cur;
    });
    accumulator.push(sum);
    console.log(accumulator)
    const bs = (index) => {
        let left = 0;
        let right = index;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            console.log(index, mid);
            if (accumulator[index] - accumulator[mid] === k) {
                return mid;
            }
            if (accumulator[index] - accumulator[mid] > k) left = mid + 1;
            else right = mid - 1;
        }

        return -1;
    }
    let min = Number.MAX_SAFE_INTEGER;
    let result;
    for(let i = 0; i < accumulator.length; i++) {
        if(accumulator[i] === k) {
            min = i + 1;
            result = [0, i];
        }
    }
    for (let i = accumulator.length - 1; i >= 0; i--) {
        const v = bs(i);
        if(v !== -1) {
            console.log(v)
            if(i - v <= min) {
                min = i - v;
                result = v === 0 ? [v, i - 1] : [v + 1, i];
            }
        }
    }

    return result;
}

// [1, 3], 4