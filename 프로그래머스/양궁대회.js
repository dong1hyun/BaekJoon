function solution(n, info) {
    let result;
    let max = 0;
    const solve = (rion, index, rest) => {
        if (index === 11) {
            let sum1 = 0, sum2 = 0;
            rion.forEach((v, i) => {
                if (v > info[i]) sum2 += (10 - i);
                else if (info[i] > 0 && v <= info[i]) sum1 += (10 - i);
            });
            const dif = sum2 - sum1;
            if (dif > max) {
                max = dif;
                result = rion;
            }
            if (dif === max && result) {
                for(let i = 10; i >= 0; i--) {
                    if(rion[i] > 0 && rion[i] > result[i]) {
                        result = rion;
                        break;
                    } 
                    else if(result[i] > 0 && rion[i] < result[i]) break;
                }
            }
            return;
        }
        const v = info[index];
        if (index === 10) {
            solve([...rion, rest], index + 1, 0);
        }
        else {
            if (rest === 0) {
                solve([...rion, 0], index + 1, rest);
            }
            if (v === 0) {
                if (rest > 0) solve([...rion, 1], index + 1, rest - 1);
                solve([...rion, 0], index + 1, rest);
            }
            if (v > 0) {
                if (rest >= v + 1) solve([...rion, v + 1], index + 1, rest - (v + 1));
                solve([...rion, 0], index + 1, rest);
            }
        }
    }
    solve([], 0, n);
    if (max === 0) return [-1];
    return result;
}