function solution(order) {
    let result = 0;
    let index = 0;
    const subContainer = [];
    for (let i = 1; i <= order.length; i++) {
        let n = order[index];
        if (n === i) {
            result++;
            index++;
        }
        else {
            while (subContainer.length > 0) {
                const front = subContainer[subContainer.length - 1];
                if (front === n) {
                    result++;
                    n = order[++index];
                    subContainer.pop();
                } else {
                    break;
                }
            }
            subContainer.push(i);
        }
    }

    while (index < order.length) {
        const n = order[index++];
        const front = subContainer.pop();

        if (n === front) result++;
        else return result;
    }

    return result;
}
