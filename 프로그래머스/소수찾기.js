function solution(numbers) {
    const pn = new Array(10000000).fill(true);
    pn[0] = pn[1] = false;
    for (let i = 2; i * i < pn.length; i++) {
        if (!pn[i]) continue;
        for (let j = i * i; j < pn.length; j += i) {
            pn[j] = false;
        }
    }
    let result = 0;
    const checked = new Array(10).fill(false);
    const checkedNum = {};
    const selectNumber = (c, n) => {
        if(n.length === c) {
            const v = Number(n);
            if(pn[v] && !checkedNum[v]) {
                checkedNum[v] = true;
                result++;
            }
            return;
        }
        for(let i = 0; i < numbers.length; i++) {
            if(!checked[i]) {
                checked[i] = true;
                selectNumber(c, n + numbers[i]);
                checked[i] = false;
            }
        }
    }

    for(let i = 1; i <= numbers.length; i++) {
        selectNumber(i, "");
    }

    return result;
}