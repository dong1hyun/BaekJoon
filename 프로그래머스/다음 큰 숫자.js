function solution(n) {
    const bn = n.toString(2);
    const nums = bn.split('');

    const index = bn.lastIndexOf("01");
    if(index >= 0) {
        let one_count = 0;
        let zero_count = 0;
        for(let i = index + 2; i < bn.length; i++) {
            if(bn[i] === '1') one_count++;
            else zero_count++;
        }
        let n = bn.substring(0, index);
        n += '10';
        for(let i = 0; i < zero_count; i++) {
            n += '0';
        }
        for(let i = 0; i < one_count; i++) {
            n += '1';
        }
        return parseInt(n, 2);
    }
    else {
        let one_count = -1;
        let zero_count = 0;
        for(let i = 0; i < bn.length; i++) {
            if(bn[i] === '1') one_count++;
            else zero_count++;
        }
        let n = "10";
        for(let i = 0; i < zero_count; i++) {
            n += '0';
        }
        for(let i = 0; i < one_count; i++) {
            n += '1';
        }

        return parseInt(n, 2);
    }
}