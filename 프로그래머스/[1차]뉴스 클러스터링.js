function isAlphabetOnly(str) {
    return /^[A-Za-z]+$/.test(str);
}

function solution(str1, str2) {
    const s1 = {};
    const s2 = {};

    for (let i = 0; i < str1.length - 1; i++) {
        let s = str1.substring(i, i + 2);
        if(isAlphabetOnly(s)) {
            s = s.toUpperCase();
            if(s1[s]) s1[s]++;
            else s1[s] = 1;
        }
    }

    for (let i = 0; i < str2.length - 1; i++) {
        let s = str2.substring(i, i + 2);
        if(isAlphabetOnly(s)) {
            s = s.toUpperCase();
            if(s2[s]) s2[s]++;
            else s2[s] = 1;
        }
    }
    let intersection = 0;
    let union = 0;
    for(const key in s1) { //교집합
        let min = 0;
        let max = s1[key];
        if(s2[key]) {
            min = Math.min(s1[key], s2[key]);
            max = Math.max(s2[key], max);
        }
        intersection += min;
        union += max;
    }
    for(const key in s2) {
        const count = s2[key];
        if(!s1[key]) {
            union += count;
        }
    }

    if(union === 0) return 65536;
    return Math.floor((intersection / union) * 65536);
}