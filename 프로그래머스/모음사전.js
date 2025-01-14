function solution(word) {
    let result = 0;
    let num = {
        'A': 0,
        'E': 1,
        'I': 2,
        'O': 3,
        'U': 4
    }
    // "AAAE"	10
    word.split('').forEach((letter, index) => {
        let sum = 1;
        let n = num[letter];
        let length = 5 - index - 1;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j <= length; j++) {
                let v = 1;
                for (let k = 0; k < j; k++) {
                    v *= 5;
                }
                sum += v;
            }
        }
        result += sum;
    }
    );

    return result;
}
// 	"AAAAE"
// "EIO"	1189

// 'A', 'E', 'I', 'O', 'U'

// "AIEOA" I가 2이기 때문에 A, E 기준 두 번 + 글자 끝까지 계산 반복 + 글자 수 줄어드는 거 반복

// "AAAAE"	6
// "AAAE"	10
// "I"	1563