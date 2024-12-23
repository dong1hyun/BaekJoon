const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const S = input[0].split('');
const T = input[1].split('');

while (S.length <= T.length) {
    if (JSON.stringify(S) === JSON.stringify(T)) {
        console.log(1);
        return;
    }
    if (T[T.length - 1] === 'A') T.splice(T.length - 1, 1);
    else {
        T.splice(T.length - 1, 1);
        T.reverse();
    }
}

console.log(0);
// T > S
// 뒤 A를 제거한다.A를
// 뒤에있는 B를 제거하고 뒤집는다.