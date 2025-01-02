function solution(picks, minerals) {
    let c = 0;
    const m5 = [];
    let pickCount = 0;
    pickCount = picks[0] + picks[1] + picks[2];
    for (let i = 0; i < minerals.length; i += 5) {
        limit = i + 5 <= minerals.length ? i + 5 : minerals.length;
        const m = [0, 0, 0];
        for (let j = i; j < limit; j++) {
            const mineral = minerals[j];
            if (mineral === 'diamond') m[0]++;
            if (mineral === 'iron') m[1]++;
            if (mineral === 'stone') m[2]++;
        }
        m5.push(m);
    }

    let sum = 0;
    function cal(arr) {
        console.log(arr);
        arr.forEach((c) => {
            if (picks[0] > 0) {
                sum = sum + c[0] + c[1] + c[2];
                picks[0]--;
            }
            else if (picks[1] > 0) {
                sum = sum + c[0] * 5 + c[1] + c[2];
                picks[1]--;
            }
            else {
                sum = sum + c[0] * 25 + c[1] * 5 + c[2];
                picks[2]--;
            }
            console.log(sum)
        });
    }
    
    if (pickCount >= m5.length) {
        m5.sort((a, b) => +b.join('') - +a.join(''));

        cal(m5);
    }
    else {
        m5.splice(m5.length - 1);
        m5.sort((a, b) => +b.join('') - +a.join(''));

        cal(m5);
    }


    return sum;
}
[[3, 2, 0], [1, 1, 1]]
["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]