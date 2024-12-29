function solution(diffs, times, limit) {
    let maxDiff = diffs.reduce((acc, v) => Math.max(acc, v), 0);
    let minDiff = diffs.reduce((acc, v) => Math.min(acc, v), Number.MAX_SAFE_INTEGER);
    let front = minDiff;
    let rear = maxDiff;
    let mid
    const cal = (level) => {
        let duration = 0;
        for (let i = 0; i < diffs.length; i++) {
            const sub = diffs[i] - level;
            if (sub > 0) {
                duration += (times[i] + times[i - 1]) * sub + times[i];
            }
            else {
                duration += times[i];
            }
        }
        return duration;
    }
    while (front <= rear) {
        mid = Math.floor((front + rear) / 2);
        if (cal(mid) <= limit) {
            rear = mid - 1;
        } else {
            front = mid + 1;
        }

    }
    return front;
}