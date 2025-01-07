function solution(cap, n, deliveries, pickups) {
    let sum = 0;

    let d_index = -1;
    for (let i = n - 1; i >= 0; i--) {
        if (deliveries[i] !== 0) {
            d_index = i;
            break;
        }
    }
    let p_index = -1;
    for (let i = n - 1; i >= 0; i--) {
        if (pickups[i] !== 0) {
            p_index = i;
            break;
        }
    }
    const solve = (index, rest, arr) => {
        if (index >= 0) {
            if (arr[index] > rest) {
                arr[index] -= rest;
            }
            else if (arr[index] === rest) {
                index--;
                while (index > -1 && arr[index] === 0) {
                    index--;
                }
            }
            else {
                while (index > -1) {
                    if (rest > arr[index]) {
                        rest -= arr[index--];
                    }
                    else if (arr[index] === rest) {
                        index--;
                        while (index > -1 && arr[index] === 0) {
                            index--;
                        }
                        break;
                    }
                    else {
                        arr[index] -= rest;
                        break;
                    }
                }
            }
        }

        return index;
    }

    while (d_index !== -1 || p_index !== -1) {
        const length = d_index > p_index ? d_index + 1 : p_index + 1;
        sum += length * 2 // 왕복거리
        d_index = solve(d_index, cap, deliveries);
        p_index = solve(p_index, cap, pickups);
    }
    console.log(sum)
    return sum;
}