const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = +input[0];
let result = "";

let start = 1;
let end;
for (let i = 0; i < tc; i++) {
    const [n, k] = input[start].split(' ').map(Number);
    const time = input[start + 1].split(' ').map(Number);
    end = start + k + 2;
    const goal = +input[end];
    const order = input.slice(start + 2, end).map((item) => item.split(' ').map(Number));
    start = end + 1;
    const prerequisite = {}
    const cache = {};
    order.forEach(([prev, next]) => {
        if (prerequisite[next]) {
            prerequisite[next].push(prev);
        } else {
            prerequisite[next] = [prev];
        }
    });
    function solve(n) { // n번호를 가진 건물을 짓는데 걸리는 최소 시간
        if(cache[n]) return cache[n];
        if (!prerequisite[n]) {
            cache[n] = time[n - 1];
            return time[n - 1];
        }
        let max = 0;
        prerequisite[n].forEach((prevNum) => {
            const t = solve(prevNum);
            if (t > max) max = t;
        });
        cache[n] = max + time[n - 1];
        return max + time[n - 1];
    }
    result += (solve(goal) + '\n');
}

console.log(result);