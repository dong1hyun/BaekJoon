function solution(targets) {
    targets.sort((a, b) => a[0] - b[0]);
    console.log(targets)
    let sum = 0;
    let minEnd = targets[0][1];
    for (let i = 1; i < targets.length; i++) {
        const [start, end] = targets[i];
        if (start >= minEnd) {
            minEnd = end;
            sum++;
        }
        else {
            minEnd = Math.min(minEnd, end);
        }
    }
    sum++;

    return sum;
}