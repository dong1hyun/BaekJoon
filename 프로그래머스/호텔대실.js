function solution(book_time) {
    const reservation = book_time.map((time) => {
        const start = time[0];
        const end = time[1];
        const start_ms = start.split(':').map(Number);
        const end_ms = end.split(':').map(Number);
        return [start_ms[0] * 60 + start_ms[1], end_ms[0] * 60 + end_ms[1]];
    });

    const n = book_time.length;
    const visited = new Array(n).fill(false);
    reservation.sort((a, b) => {
        return a[0] - b[0];
    }); 

    let sum = 0;
    while (true) {
        let flag = false;
        let prev_endTime = 0;
        for (let i = 0; i < n; i++) {
            if (!visited[i] && (reservation[i][0] >= prev_endTime + 10 || prev_endTime === 0)) {
                visited[i] = true;
                prev_endTime = reservation[i][1];
                flag = true;
            }
        }
        if (!flag) return sum;
        sum++;
    }
}