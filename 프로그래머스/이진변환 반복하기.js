function solution(s) {
    let count = 0;
    let removeCount = 0;
    const changeValue = (n) => {
        let c = 0; 
        flag = true;
        for(let i = 0; i < n.length; i++) {
            if(n[i] === '0') c++;
        }
        removeCount += c;
        return (n.length - c).toString(2);
    }

    let v = s;
    while(true) {
        count++;
        v = changeValue(v);
        if(v === '1') break;
    }

    return [count, removeCount];
}

// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.

// "110010101001"	[3,8]