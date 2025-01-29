function solution(progresses, speeds) {
    const day = [];
    for (let i = 0; i < progresses.length; i++) {
        const d = Math.ceil((100 - progresses[i]) / speeds[i]);
        day.push(d);
    }
    let cur = 0;
    let count = 0;
    const result = [];
    for (let i = 0; i < progresses.length; i++) {
        if (cur === 0) cur = day[i];
        else if (cur < day[i]) {
            cur = day[i];
            result.push(count);
            count = 0;
        }
        count++;
    }
    if (count > 0) result.push(count);

    return result;
}

// [93, 30, 55]	[1, 30, 5]	[2, 1]
// 	[ 7, 3, 9 ]

// [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
// [ 5, 10, 1, 1, 20, 1 ]