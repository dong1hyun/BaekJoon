const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let tc = +input[0];
let start = 1;
while (tc--) {
    const n = +input[start];
    const vector = [];
    
    start++;
    for (let i = start; i < start + n; i += 2) {
        const [x1, y1] = input[i].split(' ').map(Number);
        const [x2, y2] = input[i + 1].split(' ').map(Number);
        vector.push([x1 - x2, y1 - y2]);
    }
    console.log(vector);
    let min = Infinity;
    const solve = (depth, v) => {
        if(depth === vector.length) {
            // console.log(Math.sqrt(v[0] * v[0] + v[1] * v[1]))
            min = Math.min(min, Math.sqrt(v[0] * v[0] + v[1] * v[1]));
            return;
        }
        const [x, y] = vector[depth];
        const v1 = [v[0] + x, v[1] + y];
        const v2 = [v[0] - x, v[1] - y];
        solve(depth + 1, v1);
        solve(depth + 1, v2);
    };

    solve(0, [0, 0]);
    // console.log(min);

    start += n;
}


[ -39, 7 ]
[ -14, 16 ]
[ -33, -127 ]
[ 128, -52 ]
[ 133, -85 ]