function solution(record) {
    const newRecord = record.map((item) => item.split(' '));
    const idRecord = [];
    const isEnter = [];
    const nameRecord = {};

    newRecord.forEach((r) => {
        const msg = r[0];
        const id = r[1];
        if (msg === 'Leave') {
            isEnter.push(false);
            idRecord.push(id);
        }
        else {
            const name = r[2];
            if (msg === 'Enter') {
                isEnter.push(true);
                idRecord.push(id);
            }
            nameRecord[id] = name;
        }
    });

    const result = [];
    for (let i = 0; i < idRecord.length; i++) {
        if (isEnter[i]) {
            result.push(`${nameRecord[idRecord[i]]}님이 들어왔습니다.`);
        }
        else {
            result.push(`${nameRecord[idRecord[i]]}님이 나갔습니다.`);
        }
    }

    return result;
}