function solution(topping) {
    const right_check = {};
    let count = 0;
    topping.forEach((t) => {
        if(right_check[t]) {
            right_check[t]++;
        } else {
            right_check[t] = 1;
            count++;
        }
    });

    let result = 0;
    let right_count = count;
    let left_count = 0;
    const left_check = {};
    topping.forEach((t) => {
        if(!left_check[t]) {
            left_check[t] = true;
            left_count++;
        }
        if(--right_check[t] === 0) right_count--;
        if(left_count === right_count) result++;
    });
    // console.log(left_check);
    // console.log(right_check)

    return result;
}