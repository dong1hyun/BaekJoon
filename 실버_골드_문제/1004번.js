const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const findDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

const tc = +input[0];
let start = 1;
let end;

for(let i = 0; i < tc; i++) {  
    let result = 0;
    const [x1, y1, x2, y2] = input[start].split(' ').map(Number);
    end = start + Number(input[start + 1]);

    const planets = input.slice(start + 2, end + 2).map((item) => item.split(' ').map(Number));
    start = end + 2;
    planets.forEach(([x, y, r]) => {
        const d1 = findDistance(x, y, x1, y1);
        const d2 = findDistance(x, y, x2, y2);
        if(d1 < r && d2 > r || d1 > r && d2 < r) {
            result++;
        }
    });

    console.log(result);
}