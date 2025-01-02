function solution(plans) {
    plans = plans.map((plan) => {
        let startTime = plan[1];
        const time = startTime.split(':');
        startTime = +time[0] * 60 + +time[1];
        return [plan[0], startTime, +plan[2]];
    });

    plans.sort((a, b) => b[1] - a[1]);
    console.log(plans)
    const rest = [];
    const result = [];
    let curTime = 0;
    while(rest.length + plans.length > 0) {
        if(rest.length === 0) {
            curTime = plans[plans.length - 1][1];
            rest.push(plans.pop());
        }
        else {
            if(plans.length > 0) {
                const cur = rest[rest.length - 1];
                const next = plans[plans.length - 1];
                if(next[1] > curTime + cur[2]) {
                    curTime += cur[2];
                    result.push(rest.pop()[0]);
                }
                else if(next[1] < curTime + cur[2]) {
                    rest[rest.length - 1][2] -= (next[1] - curTime);
                    curTime = next[1];
                    rest.push(next);
                    plans.pop();
                }
                else {
                    curTime = next[1];
                    result.push(rest.pop()[0]);
                    rest.push(next);
                    plans.pop();
                }
            }
            else {
                result.push(rest.pop()[0]);
            }
        }
    }
    return result;
}