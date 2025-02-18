function solution(n) {
    let sum = 0;
    let m = 3;
    let length = 1;
    let order;
    while(true) {
        sum += m;
        if(n <= sum) {
            order = n - (sum - m);
            break;
        }
        length++;
        m *= 3;
    };

    let count = 1;
    result = [];
    for(let i = 0; i < length; i++) {
        let v;
        let j = 0;
        v = Math.pow(3, length - (i + 1));
        while(true) {
            if(order <= v) {
                if(j === 0) result[i] = 1;
                else if(j === 1) result[i] = 2;
                else result[i] = 4;
                break;
            }
            else {
                order -= v;
            }
            j++;
        }
    }
    
    return result.join('');
};  