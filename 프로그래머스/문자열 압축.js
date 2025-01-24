function solution(s) {
    let min = s.length;
    for (let length = 1; length <= s.length / 2; length++) {
        let i = 0;
        let prev = "";
        let count = 0;
        let l = s.length;
        while (i < s.length) {
            const cur = s.slice(i, i + length);
            if (prev === cur) {
                count++;
                if (i + length >= s.length) {
                    l = l - (count * length) + (count + 1).toString().length;
                }
            }
            else {
                if (count !== 0) {
                    l = l - (count * length) + (count + 1).toString().length;
                    count = 0;
                }
            }
            prev = cur;
            i += length;
        }
        min = Math.min(min, l);
    }

    return min;
}