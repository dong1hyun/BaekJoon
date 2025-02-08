function solution(msg) {
    const result = [];
    const map = new Map(
        Array.from({ length: 26 }, (_, i) => {
            const letter = String.fromCharCode(65 + i);
            return [letter, i];
        })
    );
    let index = 27;

    let i = 0;
    while(i < msg.length) {
        let j = i;
        while(j < msg.length) {
            const newStr = msg.substring(i, j + 1);
            if(!map.has(newStr)) {
                map.set(newStr, index++);
                break;
            }
            j++;
        }
        result.push(map.get(msg.substring(i, j)));
        i = j;
    }

    return result;
}

// KAKAO