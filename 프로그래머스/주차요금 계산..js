function solution(fees, records) {
    const [basic_time, basic_fee, extra_time, extra_fee] = fees;
    const newRecords = records.map((infos) => {
        const info = infos.split(' ');
        const t = info[0].split(':');
        info[0] = Number(t[0]) * 60 + Number(t[1]);
        return info;
    });

    newRecords.sort((a, b) => {
        const n1 = Number(a[1]);
        const n2 = Number(b[1]);

        if (n1 === n2) return a[0] - a[b];
        else return n1 - n2;
    });
    const limit = 23 * 60 + 59;
    let [prev_time, prev_num, prev_status] = newRecords[0];
    const result = [];
    let sum = 0;
    for (let i = 0; i < newRecords.length; i++) {
        const [t, n, s] = newRecords[i];

        if (i + 1 === newRecords.length || n !== newRecords[i + 1][1]) {
            if (s === 'IN') {
                sum += (limit - t);
            }
            else {
                sum += (t - prev_time);
            }
            let fee = 0;
            if (sum <= basic_time) fee = basic_fee;
            else {
                fee += basic_fee;
                fee += Math.ceil((sum - basic_time) / extra_time) * extra_fee;
            }
            result.push(fee);
            sum = 0;
        }
        else {
            if (s === 'IN') {
                [prev_time, prev_num, prev_status] = [t, n, s];
            }
            else {
                sum += t - prev_time;
            }
        }
        prev_time = t;
        prev_num = n;
        prev_status = s;
    }

    return result;
}