function solution(s) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let length = 2; length <= s.length / 2; length++) {
        let i = 0;
        let prev = "";
        let count = 0;
        let l = s.length;
        // "abcabcabcabcdededededede"
        while (true) {
            const cur = s.slice(i, i + length);
            if (prev === "") prev = cur;
            else {
                if (prev === cur) {
                    count++;
                }
                else {
                    if(count !== 0) {
                        
                    }
                }
            }
        }
    }

    return min;
}
// "abca bcab cabc dede dede dede"
// "abc abc abc abc ded ede ded ede"